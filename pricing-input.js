$( document ).ready(function() {
    function calculatePrice() {
      var user = $('#price-calculation-input').val();
      var fee  = 75;
      var mfee = 2250;
      
      if ( user == 1 ) {
        fee = 75;
        mfee = fee * user;
      }
      else if (user <= 4) {
        fee = 63.75;
        mfee = fee * user;
      }
      else if (user <= 9) {
        fee = 60;
        mfee = fee * user;
      }
      else if (user <= 19) {
        fee = 56.25;
        mfee = fee * user;
      }
      else if (user <= 49) {
        fee = 52.50;
        mfee = fee * user;
      }
      else if (user <= 99) {
        fee = 48.75;
        mfee = fee * user;
      }
      else if (user <= 1000) {
        fee = 45;
        mfee = fee * user;
      }
      else if (user == 1000) {
        fee = 45;
        mfee = fee * user;
      }
     
      else {
       
       fee = 45;
       mfee = fee * user;
      }
    //console.log(user);
    
    
      $('#price-calculation-output').text('€' + fee );
      $('#price-calculation-monthly-output').text('€' + mfee );
      //console.log(fee);
      //console.log(mfee);
    
    }
    
    
      
    $('#price-calculation-input').on("change keyup paste", calculatePrice);
       calculatePrice();
    
    
      });
    
    