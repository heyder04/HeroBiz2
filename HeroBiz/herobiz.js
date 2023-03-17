 $(window).on("load",function(){
        $(".loading").fadeOut("slow")
      })
      $(window).on("load",function(){


        var x = 0;

        function movehero() {

            if (x == 0) {
                $(".hero").animate({

                    top: 30 + "px"
                }, 2000)
            }
            $(".hero").animate({

                top: 0 + "px"
            }, 2000)

        }

        setInterval(movehero, 2000);


        const faders = document.querySelectorAll(".fade-in");
        const appearOptions = {
            threshold: 1,
            rootMargin: "0px 0px 100px 0px"
        }
        const appearOnScroll = new IntersectionObserver(function (
                etries,
                appearOnScroll
            ) {
                etries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add("appear");
                        appearOnScroll.unobserve(entry.target);
                    }
                })
            },
            appearOptions);
        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });


        const faders2 = document.querySelectorAll(".fade-in2");
        const appearOptions2 = {
            threshold: 0.2,
            rootMargin: "0px 0px 0px 0px"
        }
        const appearOnScroll2 = new IntersectionObserver(function (
                etries,
                appearOnScroll2
            ) {
                etries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add("appear");
                        appearOnScroll2.unobserve(entry.target);
                    }
                })
            },
            appearOptions2);
        faders2.forEach(fader => {
            appearOnScroll2.observe(fader);
        });


        const faders3 = document.querySelectorAll(".fade-in3");
        const appearOptions3 = {
            threshold: 0.1,
            // rootMargin:"300px"
        }
        const appearOnScroll3 = new IntersectionObserver(function (
                etries,
                appearOnScroll3
            ) {
                etries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add("appear");
                        appearOnScroll3.unobserve(entry.target);
                    }
                })
            },
            appearOptions3);
        faders3.forEach(fader => {
            appearOnScroll3.observe(fader);
        });



        const faders4 = document.querySelectorAll(".afterclient");
        const appearOptions4 = {
            threshold: 0.2,
            rootMargin: "0px 0px 0px 0px"
        }
        const appearOnScroll4 = new IntersectionObserver(function (
                etries,
                appearOnScroll4
            ) {
                etries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add("appear");
                        appearOnScroll4.unobserve(entry.target);
                    }
                })
            },
            appearOptions4);
        faders4.forEach(fader => {
            appearOnScroll4.observe(fader);
        });


        const faders5 = document.querySelectorAll(".swiper");
        const appearOptions5= {
            threshold: 0.2,
            rootMargin: "0px 0px 0px 0px"
        }
        const appearOnScroll5 = new IntersectionObserver(function (
                etries,
                appearOnScroll5
            ) {
                etries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add("appear");
                        appearOnScroll5.unobserve(entry.target);
                    }
                })
            },
            appearOptions5);
        faders5.forEach(fader => {
            appearOnScroll5.observe(fader);
        });



        $(".myflex div:nth-child(1)").click(function () {
            for (var i = 1; i < 4; i++) {
                $(".changable" + i).eq(0).css("display", "none")
            }
            $(".changable1").show()
            for (var y = 1; y < 4; y++) {
                $(".myflex div:nth-child(" + y + ")").removeClass("myflex-active")
            }



            $(".myflex div:nth-child(1)").addClass("myflex-active")



        })



        $(".myflex div:nth-child(2)").click(function () {
            for (var i = 1; i < 4; i++) {
                $(".changable" + i).eq(0).css("display", "none")
            }
            $(".changable2").show()
            for (var y = 1; y < 4; y++) {
                $(".myflex div:nth-child(" + y + ")").removeClass("myflex-active")
            }


            $(".myflex div:nth-child(2)").addClass("myflex-active")


        })

        $(".myflex div:nth-child(3)").click(function () {
            for (var i = 1; i < 4; i++) {
                $(".changable" + i).eq(0).css("display", "none")
            }
            $(".changable3").show()
            for (var y = 1; y < 4; y++) {
                $(".myflex div:nth-child(" + y + ")").removeClass("myflex-active")
            }


            $(".myflex div:nth-child(3)").addClass("myflex-active")


        })
        
      })
