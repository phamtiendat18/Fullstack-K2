import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import Column from "../../components/Column/Column";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  defaultDropAnimationSideEffects,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { columnSlice } from "../../redux/slices/columnSlice";
import Task from "../../components/Task/Task";

const { updateColumn } = columnSlice.actions;
const Home = () => {
  let list;
  const [itemId, setItemId] = useState(null);
  const [itemType, setItemType] = useState(null);
  const [itemData, setItemData] = useState(null);
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] =
    useState(null);
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  const sensor = useSensors(pointerSensor);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskList.tasks);

  const columns = useSelector((state) => state.columnsList.columns);
  // console.log(itemData);
  const findColumnOfTaskId = (taskId) => {
    return columns.find((column) => {
      list = tasks.filter((task) => {
        console.log(column);
        return task.column === column.title;
      });
      return list
        .map((item) => {
          return item._id;
        })
        ?.includes(taskId);
      // return list.find((item) => list)
    });
  };
  const handleDragStart = (e) => {
    setItemId(e.active.id);
    setItemType(e.active.data.current.column ? "task" : "column");
    setItemData(e.active.data.current);
    // console.log("dragStart: ", e.active.data.current);
    // console.log("e.active: ", e.active);
    // if (e?.active?.data?.current?._id) {
    //   setOldColumnWhenDraggingCard(e?.active?.id);
    // }
  };
  // console.log("item id: ", itemId);
  // console.log("item type: ", itemType);
  // console.log("item data: ", itemData);

  const handleDragOver = (e) => {
    // console.log(e);
    if (itemType === "column") return;
    const { active, over } = e;
    if (!active || !over) return;
    const {
      id: activeItemId,
      data: { current: activeItemData },
    } = active;
    const {
      id: overItemId,
      data: { current: overItemData },
    } = over;
    let activeColumn = tasks.filter(
      (task) => task.column === findColumnOfTaskId(activeItemId)?.title
    );
    // console.log(findColumnOfTaskId(activeItemId));
    let overColumn = tasks.filter(
      (task) => task.column === findColumnOfTaskId(overItemId)?.title
    );
    // console.log(findColumnOfTaskId(overItemId));
    // console.log("activeColumn: ", activeColumn);
    // console.log("overColumn: ", overColumn);
    if (!activeColumn || !overColumn) return;
    // console.log("activeColumn: ", activeColumn);
    // console.log("overColumn: ", overColumn);
    if (activeColumn[0] !== overColumn[0]) {
      const overTaskIndex = tasks
        .filter((task) => task.column === overColumn[0]?.column)
        .findIndex((item) => item._id === overItemId);
      // console.log(overTaskIndex);
      let newTaskIndex;
      const isBelowOverItem =
        active.rect.current.translated &&
        active.rect.current.translated.top > over.rect.top + over.rect.height;

      const modifier = isBelowOverItem ? 1 : 0;

      newTaskIndex =
        overTaskIndex >= 0 ? overTaskIndex + modifier : overColumn.length + 1;
      // console.log(findColumnOfTaskId(activeItemId));
      const nextActiveColumn = columns.find((column) => {
        // console.log(column);
        return column._id === findColumnOfTaskId(activeItemId)._id;
      });
      // console.log(nextActiveColumn);
      if (nextActiveColumn) {
        activeColumn = activeColumn.filter(
          (column) => column._id !== activeItemId
        );
        console.log();
      }
    }
  };
  const handleDragEnd = (e) => {
    // if (itemType === "column") return;
    if (itemType === "task") {
    }
    const { active, over } = e;
    if (!active || !over) return;
    if (active.id !== over.id) {
      const oldIndexColumn = columns.findIndex(
        (column) => column._id === active.id
      );
      const newIndexColumn = columns.findIndex(
        (column) => column._id === over.id
      );
      const orderColumn = arrayMove(columns, oldIndexColumn, newIndexColumn);
      // console.log(orderColumn);

      dispatch(updateColumn(orderColumn));
      // const oldIndexTask = tasks.findIndex((task) => task._id === active._id);
      // const newIndexTask = tasks.findIndex((task) => task._id === over._id);
      // const orderTask = arrayMove(tasks, oldIndexTask, newIndexTask);
      // localStorage.setItem("columns", JSON.stringify(orderColumn));
      setItemId(null);
      setItemType(null);
      setItemData(null);
    }
  };
  // const customDropAnimation = () => {
  //   sideEffects: defaultAnimateLayoutChanges({
  //     styles: { active: { opacity: "0.5" } },
  //   });
  // };
  const customDropAnimation = () => {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: { opacity: "0.5" },
      },
    });
  };
  console.log(list);
  return (
    <div className="container">
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        sensors={sensor}
      >
        <SortableContext
          items={columns ? columns.map(({ _id }) => _id) : []}
          strategy={horizontalListSortingStrategy}
        >
          <div className="column-list">
            {columns ? (
              columns.map((column) => {
                return <Column key={column._id} column={column} />;
              })
            ) : (
              <h1>Loading...</h1>
            )}
            <div className="btn-add-column">
              <button>Add column</button>
            </div>
          </div>
          <DragOverlay dropAnimation={customDropAnimation}>
            {!itemType && null}
            {itemType === "column" && <Column column={itemData} />}
            {itemType === "task" && <Task task={itemData} />}
          </DragOverlay>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Home;
