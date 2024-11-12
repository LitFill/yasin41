const elemenInput = document.getElementById("input-pembaca");
const tombolHitung = document.getElementById("tombol-hitung");
const elemenHasil = document.getElementById("p-hasil");

const jumlahYasin = 41;

tombolHitung.addEventListener("click", hitung);
elemenInput.addEventListener("keyup", hitung);
elemenInput.addEventListener("change", hitung);

function hitung() {
    const jumlahPembaca = elemenInput.value;
    if (jumlahPembaca > 0) {
        const pembacaKurangSatu =
            jumlahPembaca * Math.ceil(jumlahYasin / jumlahPembaca) -
            jumlahYasin;
        const jumlahBacaanNormal = Math.ceil(jumlahYasin / jumlahPembaca);
        const jumlahPembacaNormal = jumlahPembaca - pembacaKurangSatu;
        const hasilHitungan =
            `${jumlahPembacaNormal} orang membaca ${jumlahBacaanNormal} kali,\n${pembacaKurangSatu} orang membaca ${
                jumlahBacaanNormal - 1
            } kali.`;
        const detailHitungan =
            `(${jumlahPembacaNormal} * ${jumlahBacaanNormal} + ${pembacaKurangSatu} * ${
                jumlahBacaanNormal - 1
            }) = (${jumlahPembacaNormal * jumlahBacaanNormal} + ${
                pembacaKurangSatu * (jumlahBacaanNormal - 1)
            }) = ${
                jumlahPembacaNormal * jumlahBacaanNormal +
                pembacaKurangSatu * (jumlahBacaanNormal - 1)
            }`;

        console.log(hasilHitungan);
        console.log(detailHitungan);

        elemenHasil.innerText = hasilHitungan;
    } else {
        elemenHasil.innerText =
            "Maaf, jumlah pembaca tidak boleh kurang dari 1.";
    }
}
