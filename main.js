;(function($){
    $('.bt1').on('click',function(){
        // Swal.fire({
        //     title: "The Internet?",
        //     text: "That thing is still around?",
        //     icon: "question"
        // });
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    })
    $('.bt2').on('click',function(){
        // Swal.fire({
        //     icon: "error",
        //     title: "Oops",
        //     text: "Something went wrong!",
        //     showCloseButton: true,
        //     footer: '<a href="https://www.google.co.uk/" target="blank">check this issue?</a>'
        // });
        Swal.fire({
            imageUrl: "https://placehold.co/300x250",
            // imageHeight: 1500,
            showCloseButton: true,
            imageAlt: "A tall image"
        });
    })


    $('.bt3').on('click',function(){
        Swal.fire({
            title: "<strong>Demo</strong>",
            icon: "info",
            html: `
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
              <i class="fa fa-thumbs-up"></i> Great!
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `
              <i class="fa fa-thumbs-down"></i>
            `,
            cancelButtonAriaLabel: "Thumbs down"
        });
    })
    $('.bt4').on('click',function(){
        let save_data = ''
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
              save_data = 'Saved you changes'
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            //   console.log(result.value);
            }
            console.log(save_data);
        });
    })
    $('.bt5').on('click',function(){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            // showConfirmButton: false,
            // timer: 1500
        });
    })
    $('.bt6').on('click',function(){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "red",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete!"
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
        });
    })
    $('.bt7').on('click',function(){
        // Swal.fire({
        //     title: "Sweet!",
        //     text: "Modal with a custom image.",
        //     imageUrl: "https://placehold.co/300x250",
        //     // imageWidth: 400,
        //     // imageHeight: 200,
        //     imageAlt: "Custom image"
        // });
        Swal.fire({
            title: "Custom width, padding, color, background.",
            width: 400,
            height: 400,
            padding: "3em",
            color: "red",
            // background : 'green',
            // background: "#fff url(/images/trees.png)",
            // backdrop: `
            //   rgba(0,0,123,0.4)
            //   url("/images/nyan-cat.gif")
            //   left top
            //   no-repeat
            // `
          });
    })
    $('.bt8').on('click',function(){
        Swal.fire({
            title : 'Config param',
            text : 'Need to config',
            icon : 'question',
            iconColor : 'red',
            animation : false,
            // timer : 2000,
            timerProgressBar: true,
            showConfirmButton : true,
            confirmButtonText : 'Save',
            showDenyButton :true,
            denyButtonText : 'Deny',
            // focusConfirm : true,
            showCloseButton : true,
            closeButtonHtml : 'c',
            allowOutsideClick :false,
        })
    })
    $('.bt9').on('click',function(){
        const Toast = Swal.mixin({
            toast: true,
            position: "middle",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Update successfully"
          });
    })
    $('.bt10').on('click',function(){
        Swal.fire({
            title: "Are you sure",
            showCancelButton : true,
        }).then((result) => {
            if(result.isConfirmed){
                const Toast = Swal.mixin({
                    toast: true,
                    position: "middle",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "Update successfully"
                  });
            }
            if(result.isDismissed){
                const Toast = Swal.mixin({
                    toast: true,
                    position: "center",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "error",
                    title: "Cenceled",
                    iconColor : 'green',
                  });
            }
        })
    })
    $('.bt11').on('click',function(){
        let test_field = '';
        (async () => {
            // const { value: url } = await Swal.fire({
            //   input: "url",
            //   inputLabel: "URL address",
            //   inputPlaceholder: "Enter the URL"
            // });
            // const { value: email } = await Swal.fire({
            //     input: "email",
            //     inputLabel: "email address",
            //     inputPlaceholder: "Enter the email"
            // });
            // if (url) {
                // Swal.fire(`Entered URL: ${url}`);
            //     console.log(url);
            // }
            // if (email) {
                // Swal.fire(`Entered URL: ${url}`);
                // console.log(email);
            //     test_field = email
            // }
            $('#test_field').val(test_field);
            const { value: password } = await Swal.fire({
                title: "Enter your password",
                input: "password",
                inputLabel: "Password",
                inputPlaceholder: "Enter your password",
                inputAttributes: {
                  maxlength: "10",
                  autocapitalize: "off",
                  autocorrect: "off",
                }
            });
            if (password) {
                Swal.fire(`Entered password: ${password}`);
            }
        })()
    })
    $('.bt12').on('click',function(){
        (async () => {
            const { value: formValues } = await Swal.fire({
              title: "Multiple inputs",
              html: `
                <label>
                    <span>name</span>
                    <input id="swal-input1" class="swal2-input">
                </label> <br>
                <label>
                    <span>age</span>
                    <input id="swal-input2" class="swal2-input">
                </label>
              `,
              focusConfirm: false,

            //   preConfirm: () => {
            //     return [
            //       document.getElementById("swal-input1").value,
            //       document.getElementById("swal-input2").value
            //     ];
            //   }
            });
            let name = $('#swal-input1').val()
            let age = $('#swal-input2').val()
            let info = [name,age]
            if (formValues) {
                if(name == ''){
                    // Swal.close()
                    return
                }
                Swal.fire(JSON.stringify(info));
            }
            // console.log(info);
        })()
    })

    $('.loading1').on('click',function(){
        $(this).LoadingOverlay('show')
    })
    $('.loading2').on('click',function(){
        $('.loading1').LoadingOverlay("hide")
    })
    $('.loading3').on('click', function() {
        $.LoadingOverlay("show")
        alert("ok")            
        $.LoadingOverlay("hide")
    });
    $('.loading4').on('click',function(){
        $.ajax({
            url: localize_data.ajaxurl,
            type: "POST",
            data: {
                'action' : 'load_data',
                nonce : localize_data.nonce
            },
            success: function (response) {
                
            },
            error : function(){

            } 
        });
    })
    console.log(localize_data.nonce);
})(jQuery);