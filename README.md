# Modoc Frontend Dev Test

Untuk menjalankan program ini, anda harus melakukan beberapa tahap berikut:

1. Melakukan git clone `git@github.com:galihhhp/modoc-test.git`
2. Menginstall dependencies dengan melakukan `yarn install`
3. Kemudian menjalankan development server dengan melakukan `yarn dev`

Kekurangan:
1. Data fetching dilakukan di client side, seharusnya karena saya menggunakan Next JS, saya memanfaatkan server side data fetching. Tapi karena terdapat blocker apabila saya melakukan itu, yaitu cara mentrigger data fetching ketika button di klik. Akhirnya, saya memutuskan untuk menggunakan client side saja.
