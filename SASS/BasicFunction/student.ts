// Create the object
let student :any = {
    name: "Marouane",
    age: 20,
    city: "Beni Mellal",
    isActive: true,
    hobbies: ["coding", "football", "reading"],
    address: {
        street: "Avenue Hassan II",
        zip: "23000",
        country: "Morocco"
    }
};


console.log("Name:", student.name);


console.log("Country:", student.address.country);


console.log("Second hobby:", student.hobbies[1]);


student.email = "marouane@example.com";
console.log("After adding email:", student);


student.city = "Rabat";
console.log("After changing city:", student);


delete student.isActive;
console.log("After deleting isActive:", student);


console.log("Final object:", student);