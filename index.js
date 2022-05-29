// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    nama : "monica",
    age : 17,
    email : "monica@dindong.com",
    favoriteColor : "Yellow, Pink, White, Purple",
    isHavePet : "Yes",
    education : {
        1: [
            {name: 'SD 01', city: 'Jakarta', graduate: 2016},
            {name: 'SMP 02', city: 'Jakarta', graduate: 2019},
            {name: 'SMA 03', city: 'Tangerang'}
        ]
    },
    favoriteRestaurant : "Bento, Sushi, Pancake, Eggy, Tempura, Bento, Eggy, Padang, Tteok, Sushi, Sushi"
};
const secondUser = {
    nama : "Wendy",
    age : 23,
    email : "wendy@dingdong.com",
    favoriteColor : "Blue, Black, Grey",
    isHavePet : "No",
    education : {
        1: [
            {name: 'SD 01', city: 'Jakarta', graduate: 2016},
            {name: 'SMP 02', city: 'Jakarta', graduate: 2019},
            {name: 'SMA 03', city: 'Tangerang'}
        ]
    },
    favoriteRestaurant : "Tempura, Bento, Sushi, Pancake, Padang, Katsu, Geprek, Pancake, Eggy"
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
    users.push(firstUser, secondUser);
// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};