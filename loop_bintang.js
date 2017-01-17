/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var star = ""; // deklarasi variabel bintang

for(var i = 0; i <=10; i++)
    {
        for(var j = 0; j<1*i; j++)
        {
            star = star +"*"; // mengisi output dengan simbol *
        }   
        console.log(star); // tampilkan bintang
        star = "";
    }


