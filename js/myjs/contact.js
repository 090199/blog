var MyValidator = function() {
  var handleSubmit = function() {
    $('.form-horizontal').validate({
      errorElement : 'span',
      errorClass : 'help-block',
      focusInvalid : false,
      rules : {
        name : {
          required : true,
        },
        email : {
          required : true,
          email : true
        },
        number:{
          required:true,
          minlength:11
        },
        message : {
          required : true
        }
      },
      messages : {
        name : {
          required : "Username is required."
        },
        email : {
          required : "email is required.",
          email:"Please fill in the correct email format"
        },
        number : {
          required : "number is required.",
          minLength: "at least 11"
        },
        message : {
          required : "message is required."
        }
      },
      highlight : function(element) {
        $(element).closest('.form-group').addClass('has-error');
      },
      success : function(label) {
        label.closest('.form-group').removeClass('has-error');
        label.remove();
      },
      errorPlacement : function(error, element) {
        element.parent('div').append(error);
      },
      submitHandler : function(form) {
        form.submit();
      }
    });
    $('.form-horizontal input').keypress(function(e) {
      if (e.which == 13) {
        if ($('.form-horizontal').validate().form()) {
          $('.form-horizontal').submit();
        }
        return false;
      }
    });
  }
  return {
    init : function() {
      handleSubmit();
    }
  };
}();