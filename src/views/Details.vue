<template>
  <div class="about">
      <div class="site-wrap">

      
      <div class="site-mobile-menu">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>
      

      <header class="site-navbar py-3" role="banner">
        
        


        <div class="container">
          <div class="row align-items-center">
            
            <div class="col-6 col-xl-2">
              <h1 class="mb-0"><a href="index.html" class="text-black h2 mb-0">Cregital<span class="text-primary">.</span></a></h1>
            </div>
            <div class="col-10 col-md-8 d-none d-xl-block">
            
            </div>

            <div class="col-6 col-xl-2 text-right">
              <div class="d-none d-xl-inline-block">
                <ul class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
                  <li>
                    <a href="#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
                  </li>
                  <li>
                    <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
                  </li>
                  <li>
                    <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                  </li>
                  <li>
                    <a href="#" class="pl-3 pr-3"><span class="icon-youtube-play"></span></a>
                  </li>
                </ul>
              </div>

              <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>

            </div>

          </div>
        </div>
        
      </header>

      <div class="site-section"  data-aos="fade">
        
      <div class="container">
        

        <div class="row no-gutters" id="lightgallery">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 item" style="display:flex;">
            <div class="col-md-6">
              <a href="#"><img :src="image.src.original" alt="IMage" class="img-fluid"></a>
            </div>
            <div class="col-md-6">
              <h5> <span style="color: grey;">Protographer: </span> {{image.photographer}}</h5>
              <h5> <span style="color: grey;">Link to photgrapher:</span>  {{image.photographer_url}}</h5>

              <div class="col-md-12 d-md-flex align-items-center" style="margin-top: 4rem;" >
                <a :href="image.src.original" download="">
                  <el-button download="myFile" :href="image.src.original" type="primary">Download<i class="el-icon-upload el-icon-right"></i></el-button>
                </a>
              
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    <div class="py-3 mb-5 pt-5">
      <div class="container">
        
      </div>
    </div>

    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="mb-5">
              <h3 class="footer-heading mb-4">About Cregit</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
            </div>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0">
            


          </div>

          <div class="col-lg-4 mb-5 mb-lg-0">
          

            

          </div>
          
        </div>
        <div class="row pt-5 mt-5 text-center">
          <div class="col-md-12">
            <p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy; All rights reserved | Cregit
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>
          </div>
          
        </div>
      </div>
    </footer>

      
      
    </div>
  </div>
</template>

<script>
  export default {
     data: function () {
      return {
        image: ''
      }
    },
    methods: {
      handleClick() {
        alert('button click');
      }
    },
    created () {
      this.image = this.$route.params.image
      if (!this.$route.params.image) {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  .el-dropdown {
    vertical-align: top;
    margin-bottom: 2rem;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
