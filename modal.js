    $(document).ready(function () {
	
	///////////////////////////Start of first modal window pop ups from clicking picture ////////////////
      $("#closebtn1").click(function () {
        $("#dlg1").fadeOut(function () { $("#bkg1").hide(); });
      });
      $("#opn1").click(function () {
        if (document.getElementById('bkg1').style.visibility == 'hidden') {
          document.getElementById('bkg1').style.visibility = '';
          $("#bkg1").hide();
        }
        if (document.getElementById('dlg1').style.visibility == 'hidden') {
          document.getElementById('dlg1').style.visibility = '';
          $("#dlg").hide();
        }
        $("#bkg1").fadeIn(function () { $("#dlg1").show(); });
      });    
		
		$("#closebtn2").click(function () {
        $("#dlg2").fadeOut(function () { $("#bkg2").hide(); });
      });
	  $("#opn2").click(function () {
        if (document.getElementById('bkg2').style.visibility == 'hidden') {
          document.getElementById('bkg2').style.visibility = '';
          $("#bkg2").hide();
        }
        if (document.getElementById('dlg2').style.visibility == 'hidden') {
          document.getElementById('dlg2').style.visibility = '';
          $("#dlg2").hide();
        }
        $("#bkg2").fadeIn(function () { $("#dlg2").show();});
      }); 
	  $("#closebtn3").click(function () {
        $("#dlg3").fadeOut(function () { $("#bkg3").hide(); });
      });
	  $("#opn3").click(function () {
        if (document.getElementById('bkg3').style.visibility == 'hidden') {
          document.getElementById('bkg3').style.visibility = '';
          $("#bkg3").hide();
        }
        if (document.getElementById('dlg3').style.visibility == 'hidden') {
          document.getElementById('dlg3').style.visibility = '';
          $("#dlg3").hide();
        }
        $("#bkg3").fadeIn(function () { $("#dlg3").show(); });
      }); 
	  $("#closebtn4").click(function () {
       $("#dlg4").fadeOut(function () { $("#bkg4").hide(); });
      });
	  $("#opn4").click(function () {
        if (document.getElementById('bkg4').style.visibility == 'hidden') {
          document.getElementById('bkg4').style.visibility = '';
          $("#bkg4").hide();
        }
        if (document.getElementById('dlg4').style.visibility == 'hidden') {
          document.getElementById('dlg4').style.visibility = '';
          $("#dlg4").hide();
        }
        $("#bkg4").fadeIn(function () { $("#dlg4").show(); });
      }); 
	  
	  
	  $("#closebtn5").click(function () {
        $("#dlg5").fadeOut(function () { $("#bkg5").hide(); });
      });
	  $("#opn5").click(function () {
        if (document.getElementById('bkg5').style.visibility == 'hidden') {
          document.getElementById('bkg5').style.visibility = '';
          $("#bkg5").hide();
        }
        if (document.getElementById('dlg5').style.visibility == 'hidden') {
          document.getElementById('dlg5').style.visibility = '';
          $("#dlg5").hide();
        }
        $("#bkg5").fadeIn(function () { $("#dlg5").show(); });
      }); 
	  
	  
	  $("#closebtn6").click(function () {
        $("#dlg6").fadeOut(function () { $("#bkg6").hide(); });
      });
	  $("#opn6").click(function () {
        if (document.getElementById('bkg6').style.visibility == 'hidden') {
          document.getElementById('bkg6').style.visibility = '';
          $("#bkg6").hide();
        }
        if (document.getElementById('dlg6').style.visibility == 'hidden') {
          document.getElementById('dlg6').style.visibility = '';
          $("#dlg6").hide();
        }
        $("#bkg6").fadeIn(function () { $("#dlg6").show(); });
      }); 
	  
	  
	  $("#closebtn7").click(function () {
        $("#dlg7").fadeOut(function () { $("#bkg7").hide(); });
      });
	  $("#opn7").click(function () {
        if (document.getElementById('bkg7').style.visibility == 'hidden') {
          document.getElementById('bkg7').style.visibility = '';
          $("#bkg7").hide();
        }
        if (document.getElementById('dlg7').style.visibility == 'hidden') {
          document.getElementById('dlg7').style.visibility = '';
          $("#dlg7").hide();
        }
        $("#bkg7").fadeIn(function () { $("#dlg7").show(); });
      }); 
	  
	  
	  $("#closebtn8").click(function () {
        $("#dlg8").fadeOut(function () { $("#bkg8").hide(); });
      });
	  $("#opn8").click(function () {
        if (document.getElementById('bkg8').style.visibility == 'hidden') {
          document.getElementById('bkg8').style.visibility = '';
          $("#bkg8").hide();
        }
        if (document.getElementById('dlg8').style.visibility == 'hidden') {
          document.getElementById('dlg8').style.visibility = '';
          $("#dlg8").hide();
        }
        $("#bkg8").fadeIn(function () { $("#dlg8").show(); });
      }); 
	  
	  
	  $("#closebtn9").click(function () {
        $("#dlg9").fadeOut(function () { $("#bkg9").hide(); });
      });
	  $("#opn9").click(function () {
        if (document.getElementById('bkg9').style.visibility == 'hidden') {
          document.getElementById('bkg9').style.visibility = '';
          $("#bkg9").hide();
        }
        if (document.getElementById('dlg9').style.visibility == 'hidden') {
          document.getElementById('dlg9').style.visibility = '';
          $("#dlg9").hide();
        }
        $("#bkg9").fadeIn(function () { $("#dlg9").show(); });
      }); 
	  
	  $("#closebtn10").click(function () {
        $("#dlg10").fadeOut(function () { $("#bkg10").hide(); });
      });
	  $("#opn10").click(function () {
        if (document.getElementById('bkg10').style.visibility == 'hidden') {
          document.getElementById('bkg10').style.visibility = '';
          $("#bkg10").hide();
        }
        if (document.getElementById('dlg10').style.visibility == 'hidden') {
          document.getElementById('dlg10').style.visibility = '';
          $("#dlg10").hide();
        }
        $("#bkg10").fadeIn(function () { $("#dlg10").show(); });
      }); 
	  
	  $("#closebtn11").click(function () {
        $("#dlg11").fadeOut(function () { $("#bkg11").hide(); });
      });
	  $("#opn11").click(function () {
        if (document.getElementById('bkg11').style.visibility == 'hidden') {
          document.getElementById('bkg11').style.visibility = '';
          $("#bkg11").hide();
        }
        if (document.getElementById('dlg11').style.visibility == 'hidden') {
          document.getElementById('dlg11').style.visibility = '';
          $("#dlg11").hide();
        }
        $("#bkg11").fadeIn(function () { $("#dlg11").show(); });
      });
	  
	  ///////////////////////////End of first modal window pop ups from clicking picture ////////////////
      ///////////////////////////Start of Make Reservation pop up modal window////////////////////////////////////////


	  $("#closebtn12").click(function () {
        $("#dlg12").fadeOut(function () { $("#bkg12").hide(); });
      });
	  $("#bsbMR").click(function () {
        if (document.getElementById('bkg12').style.visibility == 'hidden') {
          document.getElementById('bkg12').style.visibility = '';
          $("#bkg12").hide();
        }
        if (document.getElementById('dlg12').style.visibility == 'hidden') {
          document.getElementById('dlg12').style.visibility = '';
          $("#dlg12").hide();
        }
        $("#bkg12").fadeIn(function () { $("#dlg12").show(); });
      });


	  	  $("#closebtn12").click(function () {
        $("#dlg12").fadeOut(function () { $("#bkg12").hide(); });
      });
	  $("#cseMR").click(function () {
        if (document.getElementById('bkg12').style.visibility == 'hidden') {
          document.getElementById('bkg12').style.visibility = '';
          $("#bkg12").hide();
        }
        if (document.getElementById('dlg12').style.visibility == 'hidden') {
          document.getElementById('dlg12').style.visibility = '';
          $("#dlg12").hide();
        }
        $("#bkg12").fadeIn(function () { $("#dlg12").show(); });
      });

	  	  $("#closebtn12").click(function () {
        $("#dlg12").fadeOut(function () { $("#bkg12").hide(); });
      });
	  $("#ghMR").click(function () {
        if (document.getElementById('bkg12').style.visibility == 'hidden') {
          document.getElementById('bkg12').style.visibility = '';
          $("#bkg12").hide();
        }
        if (document.getElementById('dlg12').style.visibility == 'hidden') {
          document.getElementById('dlg12').style.visibility = '';
          $("#dlg12").hide();
        }
        $("#bkg12").fadeIn(function () { $("#dlg12").show(); });
      });

	  	  $("#closebtn12").click(function () {
        $("#dlg12").fadeOut(function () { $("#bkg12").hide(); });
      });
	  $("#l2MR").click(function () {
        if (document.getElementById('bkg12').style.visibility == 'hidden') {
          document.getElementById('bkg12').style.visibility = '';
          $("#bkg12").hide();
        }
        if (document.getElementById('dlg12').style.visibility == 'hidden') {
          document.getElementById('dlg12').style.visibility = '';
          $("#dlg12").hide();
        }
        $("#bkg12").fadeIn(function () { $("#dlg12").show(); });
      });

	  	  $("#closebtn12").click(function () {
        $("#dlg12").fadeOut(function () { $("#bkg12").hide(); });
      });
	  $("#l3MR").click(function () {
        if (document.getElementById('bkg12').style.visibility == 'hidden') {
          document.getElementById('bkg12').style.visibility = '';
          $("#bkg12").hide();
        }
        if (document.getElementById('dlg12').style.visibility == 'hidden') {
          document.getElementById('dlg12').style.visibility = '';
          $("#dlg12").hide();
        }
        $("#bkg12").fadeIn(function () { $("#dlg12").show(); });
      });

	  	  $("#closebtn12").click(function () {
        $("#dlg12").fadeOut(function () { $("#bkg12").hide(); });
      });
	  $("#nbMR").click(function () {
        if (document.getElementById('bkg12').style.visibility == 'hidden') {
          document.getElementById('bkg12').style.visibility = '';
          $("#bkg12").hide();
        }
        if (document.getElementById('dlg12').style.visibility == 'hidden') {
          document.getElementById('dlg12').style.visibility = '';
          $("#dlg12").hide();
        }
        $("#bkg12").fadeIn(function () { $("#dlg12").show(); });
      });

	  	  $("#closebtn12").click(function () {
        $("#dlg12").fadeOut(function () { $("#bkg12").hide(); });
      });
	  $("#pcMR").click(function () {
        if (document.getElementById('bkg12').style.visibility == 'hidden') {
          document.getElementById('bkg12').style.visibility = '';
          $("#bkg12").hide();
        }
        if (document.getElementById('dlg12').style.visibility == 'hidden') {
          document.getElementById('dlg12').style.visibility = '';
          $("#dlg12").hide();
        }
        $("#bkg12").fadeIn(function () { $("#dlg12").show(); });
      });

	  	  $("#closebtn12").click(function () {
        $("#dlg12").fadeOut(function () { $("#bkg12").hide(); });
      });
	  $("#smeMR").click(function () {
        if (document.getElementById('bkg12').style.visibility == 'hidden') {
          document.getElementById('bkg12').style.visibility = '';
          $("#bkg12").hide();
        }
        if (document.getElementById('dlg12').style.visibility == 'hidden') {
          document.getElementById('dlg12').style.visibility = '';
          $("#dlg12").hide();
        }
        $("#bkg12").fadeIn(function () { $("#dlg12").show(); });
      });

	  	  $("#closebtn12").click(function () {
        $("#dlg12").fadeOut(function () { $("#bkg12").hide(); });
      });
	  $("#tpMR").click(function () {
        if (document.getElementById('bkg12').style.visibility == 'hidden') {
          document.getElementById('bkg12').style.visibility = '';
          $("#bkg12").hide();
        }
        if (document.getElementById('dlg12').style.visibility == 'hidden') {
          document.getElementById('dlg12').style.visibility = '';
          $("#dlg12").hide();
        }
        $("#bkg12").fadeIn(function () { $("#dlg12").show(); });
      });

	  	  $("#closebtn12").click(function () {
        $("#dlg12").fadeOut(function () { $("#bkg12").hide(); });
      });
	  $("#wcMR").click(function () {
        if (document.getElementById('bkg12').style.visibility == 'hidden') {
          document.getElementById('bkg12').style.visibility = '';
          $("#bkg12").hide();
        }
        if (document.getElementById('dlg12').style.visibility == 'hidden') {
          document.getElementById('dlg12').style.visibility = '';
          $("#dlg12").hide();
        }
        $("#bkg12").fadeIn(function () { $("#dlg12").show(); });
      });

	  	  $("#closebtn12").click(function () {
        $("#dlg12").fadeOut(function () { $("#bkg12").hide(); });
      });
	  $("#thMR").click(function () {
        if (document.getElementById('bkg12').style.visibility == 'hidden') {
          document.getElementById('bkg12').style.visibility = '';
          $("#bkg12").hide();
        }
        if (document.getElementById('dlg12').style.visibility == 'hidden') {
          document.getElementById('dlg12').style.visibility = '';
          $("#dlg12").hide();
        }
        $("#bkg12").fadeIn(function () { $("#dlg12").show(); });
      });

	   ///////////////////////////End of Make Reservation pop up modal window////////////////////////////////////////
	   ///////////////////////////Start of Cancel Reservation pop up modal window////////////////////////////////////////
	  
	  	  $("#closebtn13").click(function () {
        $("#dlg13").fadeOut(function () { $("#bkg13").hide(); });
      });
	  $("#bsbC").click(function () {
        if (document.getElementById('bkg13').style.visibility == 'hidden') {
          document.getElementById('bkg13').style.visibility = '';
          $("#bkg13").hide();
        }
        if (document.getElementById('dlg13').style.visibility == 'hidden') {
          document.getElementById('dlg13').style.visibility = '';
          $("#dlg13").hide();
        }
        $("#bkg13").fadeIn(function () { $("#dlg13").show(); });
      });


	  	  $("#closebtn13").click(function () {
        $("#dlg13").fadeOut(function () { $("#bkg13").hide(); });
      });
	  $("#cseC").click(function () {
        if (document.getElementById('bkg13').style.visibility == 'hidden') {
          document.getElementById('bkg13').style.visibility = '';
          $("#bkg13").hide();
        }
        if (document.getElementById('dlg13').style.visibility == 'hidden') {
          document.getElementById('dlg13').style.visibility = '';
          $("#dlg13").hide();
        }
        $("#bkg13").fadeIn(function () { $("#dlg13").show(); });
      });

	  	  $("#closebtn13").click(function () {
        $("#dlg13").fadeOut(function () { $("#bkg13").hide(); });
      });
	  $("#ghC").click(function () {
        if (document.getElementById('bkg13').style.visibility == 'hidden') {
          document.getElementById('bkg13').style.visibility = '';
          $("#bkg13").hide();
        }
        if (document.getElementById('dlg13').style.visibility == 'hidden') {
          document.getElementById('dlg13').style.visibility = '';
          $("#dlg13").hide();
        }
        $("#bkg13").fadeIn(function () { $("#dlg13").show(); });
      });

	  	  $("#closebtn13").click(function () {
        $("#dlg13").fadeOut(function () { $("#bkg13").hide(); });
      });
	  $("#l2C").click(function () {
        if (document.getElementById('bkg13').style.visibility == 'hidden') {
          document.getElementById('bkg13').style.visibility = '';
          $("#bkg13").hide();
        }
        if (document.getElementById('dlg13').style.visibility == 'hidden') {
          document.getElementById('dlg13').style.visibility = '';
          $("#dlg13").hide();
        }
        $("#bkg13").fadeIn(function () { $("#dlg13").show(); });
      });

	  	  $("#closebtn13").click(function () {
        $("#dlg13").fadeOut(function () { $("#bkg13").hide(); });
      });
	  $("#l3C").click(function () {
        if (document.getElementById('bkg13').style.visibility == 'hidden') {
          document.getElementById('bkg13').style.visibility = '';
          $("#bkg13").hide();
        }
        if (document.getElementById('dlg13').style.visibility == 'hidden') {
          document.getElementById('dlg13').style.visibility = '';
          $("#dlg13").hide();
        }
        $("#bkg13").fadeIn(function () { $("#dlg13").show(); });
      });

	  	  $("#closebtn13").click(function () {
        $("#dlg13").fadeOut(function () { $("#bkg13").hide(); });
      });
	  $("#nbC").click(function () {
        if (document.getElementById('bkg13').style.visibility == 'hidden') {
          document.getElementById('bkg13').style.visibility = '';
          $("#bkg13").hide();
        }
        if (document.getElementById('dlg13').style.visibility == 'hidden') {
          document.getElementById('dlg13').style.visibility = '';
          $("#dlg13").hide();
        }
        $("#bkg13").fadeIn(function () { $("#dlg13").show(); });
      });

	  	  $("#closebtn13").click(function () {
        $("#dlg13").fadeOut(function () { $("#bkg13").hide(); });
      });
	  $("#pcC").click(function () {
        if (document.getElementById('bkg13').style.visibility == 'hidden') {
          document.getElementById('bkg13').style.visibility = '';
          $("#bkg13").hide();
        }
        if (document.getElementById('dlg13').style.visibility == 'hidden') {
          document.getElementById('dlg13').style.visibility = '';
          $("#dlg13").hide();
        }
        $("#bkg13").fadeIn(function () { $("#dlg13").show(); });
      });

	  	  $("#closebtn13").click(function () {
        $("#dlg13").fadeOut(function () { $("#bkg13").hide(); });
      });
	  $("#smeC").click(function () {
        if (document.getElementById('bkg13').style.visibility == 'hidden') {
          document.getElementById('bkg13').style.visibility = '';
          $("#bkg13").hide();
        }
        if (document.getElementById('dlg13').style.visibility == 'hidden') {
          document.getElementById('dlg13').style.visibility = '';
          $("#dlg13").hide();
        }
        $("#bkg13").fadeIn(function () { $("#dlg13").show(); });
      });

	  	  $("#closebtn13").click(function () {
        $("#dlg13").fadeOut(function () { $("#bkg13").hide(); });
      });
	  $("#tpC").click(function () {
        if (document.getElementById('bkg13').style.visibility == 'hidden') {
          document.getElementById('bkg13').style.visibility = '';
          $("#bkg13").hide();
        }
        if (document.getElementById('dlg13').style.visibility == 'hidden') {
          document.getElementById('dlg13').style.visibility = '';
          $("#dlg13").hide();
        }
        $("#bkg13").fadeIn(function () { $("#dlg13").show(); });
      });

	  	  $("#closebtn13").click(function () {
        $("#dlg13").fadeOut(function () { $("#bkg13").hide(); });
      });
	  $("#wcC").click(function () {
        if (document.getElementById('bkg13').style.visibility == 'hidden') {
          document.getElementById('bkg13').style.visibility = '';
          $("#bkg13").hide();
        }
        if (document.getElementById('dlg13').style.visibility == 'hidden') {
          document.getElementById('dlg13').style.visibility = '';
          $("#dlg13").hide();
        }
        $("#bkg13").fadeIn(function () { $("#dlg13").show(); });
      });

	  	  $("#closebtn13").click(function () {
        $("#dlg13").fadeOut(function () { $("#bkg13").hide(); });
      });
	  $("#thC").click(function () {
        if (document.getElementById('bkg13').style.visibility == 'hidden') {
          document.getElementById('bkg13').style.visibility = '';
          $("#bkg13").hide();
        }
        if (document.getElementById('dlg13').style.visibility == 'hidden') {
          document.getElementById('dlg13').style.visibility = '';
          $("#dlg13").hide();
        }
        $("#bkg13").fadeIn(function () { $("#dlg13").show(); });
      });

	   ///////////////////////////End of Cancel Reservation pop up modal window////////////////////////////////////////
	   ///////////////////////////Start of View All Reservation pop up modal window////////////////////////////////////////
	  
	  	  $("#closebtn14").click(function () {
        $("#dlg14").fadeOut(function () { $("#bkg14").hide(); });
      });
	  $("#bsbVA").click(function () {
        if (document.getElementById('bkg14').style.visibility == 'hidden') {
          document.getElementById('bkg14').style.visibility = '';
          $("#bkg14").hide();
        }
        if (document.getElementById('dlg14').style.visibility == 'hidden') {
          document.getElementById('dlg14').style.visibility = '';
          $("#dlg14").hide();
        }
        $("#bkg14").fadeIn(function () { $("#dlg14").show(); });
      });


	  	  $("#closebtn14").click(function () {
        $("#dlg14").fadeOut(function () { $("#bkg14").hide(); });
      });
	  $("#cseVA").click(function () {
        if (document.getElementById('bkg14').style.visibility == 'hidden') {
          document.getElementById('bkg14').style.visibility = '';
          $("#bkg14").hide();
        }
        if (document.getElementById('dlg14').style.visibility == 'hidden') {
          document.getElementById('dlg14').style.visibility = '';
          $("#dlg14").hide();
        }
        $("#bkg14").fadeIn(function () { $("#dlg14").show(); });
      });

	  	  $("#closebtn14").click(function () {
        $("#dlg14").fadeOut(function () { $("#bkg14").hide(); });
      });
	  $("#ghVA").click(function () {
        if (document.getElementById('bkg14').style.visibility == 'hidden') {
          document.getElementById('bkg14').style.visibility = '';
          $("#bkg14").hide();
        }
        if (document.getElementById('dlg14').style.visibility == 'hidden') {
          document.getElementById('dlg14').style.visibility = '';
          $("#dlg14").hide();
        }
        $("#bkg14").fadeIn(function () { $("#dlg14").show(); });
      });

	  	  $("#closebtn14").click(function () {
        $("#dlg14").fadeOut(function () { $("#bkg14").hide(); });
      });
	  $("#l2VA").click(function () {
        if (document.getElementById('bkg14').style.visibility == 'hidden') {
          document.getElementById('bkg14').style.visibility = '';
          $("#bkg14").hide();
        }
        if (document.getElementById('dlg14').style.visibility == 'hidden') {
          document.getElementById('dlg14').style.visibility = '';
          $("#dlg14").hide();
        }
        $("#bkg14").fadeIn(function () { $("#dlg14").show(); });
      });

	  	  $("#closebtn14").click(function () {
        $("#dlg14").fadeOut(function () { $("#bkg14").hide(); });
      });
	  $("#l3VA").click(function () {
        if (document.getElementById('bkg14').style.visibility == 'hidden') {
          document.getElementById('bkg14').style.visibility = '';
          $("#bkg14").hide();
        }
        if (document.getElementById('dlg14').style.visibility == 'hidden') {
          document.getElementById('dlg14').style.visibility = '';
          $("#dlg14").hide();
        }
        $("#bkg14").fadeIn(function () { $("#dlg14").show(); });
      });

	  	  $("#closebtn14").click(function () {
        $("#dlg14").fadeOut(function () { $("#bkg14").hide(); });
      });
	  $("#nbVA").click(function () {
        if (document.getElementById('bkg14').style.visibility == 'hidden') {
          document.getElementById('bkg14').style.visibility = '';
          $("#bkg14").hide();
        }
        if (document.getElementById('dlg14').style.visibility == 'hidden') {
          document.getElementById('dlg14').style.visibility = '';
          $("#dlg14").hide();
        }
        $("#bkg14").fadeIn(function () { $("#dlg14").show(); });
      });

	  	  $("#closebtn14").click(function () {
        $("#dlg14").fadeOut(function () { $("#bkg14").hide(); });
      });
	  $("#pcVA").click(function () {
        if (document.getElementById('bkg14').style.visibility == 'hidden') {
          document.getElementById('bkg14').style.visibility = '';
          $("#bkg14").hide();
        }
        if (document.getElementById('dlg14').style.visibility == 'hidden') {
          document.getElementById('dlg14').style.visibility = '';
          $("#dlg14").hide();
        }
        $("#bkg14").fadeIn(function () { $("#dlg14").show(); });
      });

	  	  $("#closebtn14").click(function () {
        $("#dlg14").fadeOut(function () { $("#bkg14").hide(); });
      });
	  $("#smeVA").click(function () {
        if (document.getElementById('bkg14').style.visibility == 'hidden') {
          document.getElementById('bkg14').style.visibility = '';
          $("#bkg14").hide();
        }
        if (document.getElementById('dlg14').style.visibility == 'hidden') {
          document.getElementById('dlg14').style.visibility = '';
          $("#dlg14").hide();
        }
        $("#bkg14").fadeIn(function () { $("#dlg14").show(); });
      });

	  	  $("#closebtn14").click(function () {
        $("#dlg14").fadeOut(function () { $("#bkg14").hide(); });
      });
	  $("#tpVA").click(function () {
        if (document.getElementById('bkg14').style.visibility == 'hidden') {
          document.getElementById('bkg14').style.visibility = '';
          $("#bkg14").hide();
        }
        if (document.getElementById('dlg14').style.visibility == 'hidden') {
          document.getElementById('dlg14').style.visibility = '';
          $("#dlg14").hide();
        }
        $("#bkg14").fadeIn(function () { $("#dlg14").show(); });
      });

	  	  $("#closebtn14").click(function () {
        $("#dlg14").fadeOut(function () { $("#bkg14").hide(); });
      });
	  $("#wcVA").click(function () {
        if (document.getElementById('bkg14').style.visibility == 'hidden') {
          document.getElementById('bkg14').style.visibility = '';
          $("#bkg14").hide();
        }
        if (document.getElementById('dlg14').style.visibility == 'hidden') {
          document.getElementById('dlg14').style.visibility = '';
          $("#dlg14").hide();
        }
        $("#bkg14").fadeIn(function () { $("#dlg14").show(); });
      });

	  	  $("#closebtn14").click(function () {
        $("#dlg14").fadeOut(function () { $("#bkg14").hide(); });
      });
	  $("#thVA").click(function () {
        if (document.getElementById('bkg14').style.visibility == 'hidden') {
          document.getElementById('bkg14').style.visibility = '';
          $("#bkg14").hide();
        }
        if (document.getElementById('dlg14').style.visibility == 'hidden') {
          document.getElementById('dlg14').style.visibility = '';
          $("#dlg14").hide();
        }
        $("#bkg14").fadeIn(function () { $("#dlg14").show(); });
      });

	  
	  	  	  $("#closebtn15").click(function () {
        $("#dlg15").fadeOut(function () { $("#bkg15").hide(); });
      });
	  $("#fdBtn").click(function () {
        if (document.getElementById('bkg15').style.visibility == 'hidden') {
          document.getElementById('bkg15').style.visibility = '';
          $("#bkg15").hide();
        }
        if (document.getElementById('dlg15').style.visibility == 'hidden') {
          document.getElementById('dlg15').style.visibility = '';
          $("#dlg15").hide();
        }
        $("#bkg15").fadeIn(function () { $("#dlg15").show(); });
      });
	  
	  
     ///////////////////////////End of View All Reservation pop up modal window////////////////////////////////////////
	  
	  });
