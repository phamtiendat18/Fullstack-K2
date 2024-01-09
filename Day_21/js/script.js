var getEx01 = function () {
  var errors = {
    name: {
      required: "Vui lòng nhập họ tên",
      min: "Họ tên phải từ 5 ký tự",
    },
    email: {
      email: "Định dạng email không hợp lệ",
      unique: "Email đã có người sử dụng",
      required: "Vui lòng nhập địa chỉ email",
    },
    password: {
      required: "Vui lòng nhập mật khẩu",
      same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
  };
  // Hàm getError(field)
  let getError = function (field) {
    let error = errors[field];
    let message = Object.values(error)[0];
    console.log(message);
  };
  getError("name");
  getError("email");
};

var getEx02 = function () {
  // Hàm constructor
  function User(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  // Hàm sắp xếp và thêm shortName createCustomers
  function createCustomers(users) {
    return users
      .map(function (user) {
        var fullName = user.name.split(" ");
        var firstName = fullName[0];
        var lastName = fullName[fullName.length - 1];
        var person = new User(user.name, user.age, user.address);
        person.shortName = `${firstName} ${lastName}`;
        return person;
      })
      .sort(function (a, b) {
        return a.age - b.age;
      });
  }

  const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
  ];

  const result = createCustomers(customers);

  console.log(result);
};

var getEx03 = function () {
  var User = function (name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  };
  // Hàm register
  function register(name, password, email) {
    if (!name || !password || !email) {
      return "Nhập chưa đủ thông tin";
    }
    var re = /\S+@\S+\.\S+/;
    if (re.test(email) === false) {
      return "Email không hợp lệ";
    }
    const userExists = data.some(function (user) {
      return user.email === email;
    });
    if (userExists) {
      console.log("Địa chỉ email đã được sử dụng");
      return false;
    }

    const newUser = new User(name, password, email);
    newUser.role = "user";
    data.push(newUser);

    return data;
  }
  // Hàm login
  function login(email, password) {
    const foundUser = data.find(function (user) {
      return user.email === email && user.password === password;
    });
    return foundUser ? foundUser : "Thông tin đăng nhập không hợp lệ";
  }

  const data = [];
  register("Phạm Tiến Đạt", "123456", "phamtiendat@gmail.com");
  register("Phạm Đạt", "1234567", "phamdat@gmail.com");
  console.log(data);

  const dataLogin = login("phamdat@gmail.com", "1234567");
  console.log(dataLogin);
};

console.log("Bài 1:");
getEx01();
console.log("Bài 2:");
getEx02();
console.log("Bài 3:");
getEx03();
