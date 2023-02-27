$(function () {
  $("#nav1").on("click", function () {
    $(".modal").fadeIn();
  });

  $(" #modalkapatt").on("click", function () {
    $(".modal").hide();
  });
});

$(function () {
  $("#nav2").on("click", function () {
    $(".main1").fadeIn();
  });

  $("#qui").click(function () {
    $(".main1").hide();
  });
});

$(function () {
  $(".giriş-yap").on("click", function () {
    $(".modal").hide();
  });
});

$(function () {
  $(".giriş-yap").on("click", function () {
    $(".main1").fadeIn();
  });
});

$("#nav2").click(function () {
  $(".modal").hide();
});

$("#nav1").click(function () {
  $(".main1").hide();
});

$(function () {
  $("#çakallarladans").on("click", function () {
    $(".resimleee1").show();
  });
});

$(function(){


$("#det").on("click" , function(){


$(".resimleee1").hide()

})


})




$(function () {
  $("#illegalhayatlar").on("click", function () {
    $(".resimleee2").show();
  });
  $("#dete").on("click", function () {
    $(".resimleee2").hide();
  });
});

$(function () {
  $("#musallat3").on("click", function () {
    $(".resimleee3").show();
  });
  $("#deten").on("click", function () {
    $(".resimleee3").hide();
  });
});

$(function () {
  $("#umudunkıyısında").on("click", function () {
    $(".resimleee4").show();
  });
  $("#detene").on("click", function () {
    $(".resimleee4").hide();
  });
});

$(function () {
  $("#colony").on("click", function () {
    $(".resimleee5").show();
  });
  $("#detenen").on("click", function () {
    $(".resimleee5").hide();
  });
});

$(function () {
  $("#erene").on("click", function () {
    $(".resimleee6").show();
  });
  $("#detenene").on("click", function () {
    $(".resimleee6").hide();
  });
});

$(function () {
  $("#kutsaldamacana").on("click", function () {
    $(".resimleee7").show();
  });
  $("#detenenen").on("click", function () {
    $(".resimleee7").hide();
  });
});

$(function () {
  $("#avatara").on("click", function () {
    $(".resimleee8").show();
  });
  $("#detenenene").on("click", function () {
    $(".resimleee8").hide();
  });
});

$(function () {
  $("#kayıtoll").click(function () {
    let isim, soyisim, gmail, tel, sifre;
    isim = $("#register #isim").val();
    soyisim = $("#register #soyisim").val();
    gmail = $("#register #gmail").val();
    tel = $("#register #tel").val();
    sifre = $("#register #şikayet").val();
    if (
      isim != "" &&
      soyisim != "" &&
      gmail != "" &&
      tel != "" &&
      sifre != ""
    ) {
      Swal.fire("Kayıt Olma İşlemi Başarılı!", "", "success");
      $("#message1").hide();
      $("#message2").hide();
      $("#message3").hide();
      $("#message4").hide();
      $("#message5").hide();
      $("#message6").hide();
      $(".modal").hide();
    } else if (
      isim == "" &&
      soyisim == "" &&
      gmail == "" &&
      tel == "" &&
      sifre == ""
    ) {
      $("#message6").show();
      $("#message1").hide();
      $("#message2").hide();
      $("#message3").hide();
      $("#message4").hide();
      $("#message5").hide();
    } else if (isim == "") {
      $("#message1").show();
      $("#message2").hide();
      $("#message3").hide();
      $("#message4").hide();
      $("#message5").hide();
      $("#message6").hide();
    } else if (soyisim == "") {
      $("#message2").show();
      $("#message1").hide();
      $("#message3").hide();
      $("#message4").hide();
      $("#message5").hide();
      $("#message6").hide();
    } else if (gmail == "") {
      $("#message3").show();
      $("#message1").hide();
      $("#message2").hide();
      $("#message4").hide();
      $("#message5").hide();
      $("#message6").hide();
    } else if (tel == "") {
      $("#message4").show();
      $("#message1").hide();
      $("#message2").hide();
      $("#message3").hide();
      $("#message5").hide();
      $("#message6").hide();
    } else if (sifre == "") {
      $("#message5").show();
      $("#message1").hide();
      $("#message2").hide();
      $("#message3").hide();
      $("#message4").hide();
      $("#message6").hide();
    } else if (isim != "") {
      $("#message1").hide();
      $("#message2").show();
      $("#message3").show();
      $("#message4").show();
      $("#message5").show();
      $("#message6").show();
    }
    if (
      isim != "" ||
      soyisim != "" ||
      gmail != "" ||
      tel != "" ||
      sifre != ""
    ) {
      if (isim == "") {
        $("#message1").show();
      }
      if (soyisim == "") {
        $("#message2").show();
      }
      if (gmail == "") {
        $("#message3").show();
      }
      if (tel == "") {
        $("#message4").show();
      }
      if (sifre == "") {
        $("#message5").show();
      }
    }
  });
});

$(function () {
  $("button").click(function () {
    let mail, password;

    mail = $("#login #mail").val();
    password = $("#login #password").val();

    if (mail != "" && password != "") {
      Swal.fire("Başarıyla Giriş Yapılmıştır!", "", "success");
      $("#mesajj").hide();
      $("#mesajj1").hide();
      $("#mesajj2").hide();
      $(".main1").hide();
    } else if (mail == "" && password == "") {
      $("#mesajj2").show();
      $("#mesajj").hide();
      $("#mesajj1").hide();
    } else if (mail == "") {
      $("#mesajj").show();
      $("#mesajj1").hide();
      $("#mesajj2").hide();
    } else if (password == "") {
      $("#mesajj").hide();
      $("#mesajj1").show();
      $("#mesajj2").hide();
    } else if (mail != "") {
      $("#mesajj").hide();
      $("#mesajj1").hide();
      $("#mesajj2").hide();
    } else if (password != "") {
      $("#mesajj1").hide();
      $("#mesajj2").hide();
    }
  });
});

$(function () {
  $("button").click(function () {
    let fields = ["#ses", "#ses1", "#ses2", "#ses3"];
    let messages = ["#mesaj1", "#mesaj2", "#mesaj3", "#mesaj4", "#mesaj5"];
    let hasError = false;
    messages.forEach((message) => $(message).hide());
    fields.forEach((field, index) => {
      let value = $(`.alt ${field}`).val();
      if (value === "") {
        hasError = true;
        $(messages[index]).show();
      }
    });
    if (!hasError) {
      Swal.fire("Şikayet ve Önerileriniz Başarıyla Gönderildi!", "", "success");
    } else if (fields.every((field) => $(`.alt ${field}`).val() === "")) {
      $("#mesaj5").show();
      messages.slice(0, -1).forEach((message) => $(message).hide());
    }
  });
});


$(function(){
$("#cap").on("click", function(){


$(".main1").hide();


});



});


