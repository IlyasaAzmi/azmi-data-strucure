const contacts = [
  {
    id: 1,
    fullName: "Genna Arnli",
    phoneNumber: "5278765234",
    email: "garnli0@photobucket.com",
    gender: "Female"
  },
  {
    id: 2,
    fullName: "Jojo Scotchford",
    phoneNumber: "7925766855",
    email: "jscotchford1@booking.com",
    gender: "Female"
  },
  {
    id: 3,
    fullName: "Kakalina Pietasch",
    phoneNumber: "3118199662",
    email: "kpietasch2@auda.org.au",
    gender: "Female"
  },
  {
    id: 4,
    fullName: "Araldo Coil",
    phoneNumber: "5887272284",
    email: "acoil3@behance.net",
    gender: "Male"
  },
  {
    id: 5,
    fullName: "Shadow Maffi",
    phoneNumber: "8455497996",
    email: "smaffi4@bravesites.com",
    gender: "Male"
  }
];

// console.log(contacts);

//menampilkan data contact
function view(data) {
  let contactview = data.map(item => item);
  console.log(contactview);
}

//menampilkan data per id
function detail(data, id) {
  // menampilkan detail per id
  let contactfind = data.find(item => item.id == id);
  console.log(contactfind);
}

//tambah data contact
function add(id, name, phone, email, gender) {
  let contactadd = [...contacts];
  var contacttambah = {
    id: id,
    fullName: name,
    phoneNumber: phone,
    email: email,
    gender: gender
  };
  // console.log(contacttambah);
  contactadd.push(contacttambah);
  console.log(contactadd);
}

//edit data contact
function edit(id, name, phone, email, gender) {
  let contactedit = [...contacts];
  var contactupdate = {
    id: id,
    fullName: name,
    phoneNumber: phone,
    email: email,
    gender: gender
  };

  var foundContact = contactedit.findIndex(
    item => item.id === contactupdate.id
  );
  contactedit[foundContact] = contactupdate;

  console.log(contactedit);
}

//hapus data contact
function remove(id) {
  let contactremove = [...contacts];
  contactremove.splice(contactremove.findIndex(item => item.id === id), 1);
  console.log(contactremove);
}

//memanggil fungsi view
view(contacts);

//memanggil fungsi detail
detail(contacts, 2);

//tambah data dengan parameter id, nama, phone, email, dan gender
add(6, "Azmi azmi", "098765432", "azmi@ok.com", "Male");

//update data dengan parameter id, nama, phone, email, dan gender
edit(1, "Mimi mimi", "087654321", "ami@ok.com", "Female");

//hapus data dengan parameter id
remove(1);
