<template>
  <div class="home">
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
    <div class="site-blocks-cover overlay inner-page-cover" style="background-image: url('./hero_bg_2.jpg');">
    <!-- <div class="site-blocks-cover overlay inner-page-cover" style="background-image: url('images/hero_bg_3.jpg');" data-stellar-background-ratio="0.5"> -->
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7 text-center" data-aos="fade-up">
            <div class="col-md-12">
              <input type="subject" placeholder="Search Term" v-model="search" id="subject" class="form-control">
            </div>
            <div class="col-md-12" style="margin-top: 2rem;">
              <el-button @click="result"  type="primary">Search Images</el-button>
              <!-- <input type="submit" value="Search Images" @click="result" class="btn btn-primary py-2 px-4 text-white"> -->
            </div>
               
          </div>
        </div>
      </div>
    </div>    

   <div class="py-3 mb-5 mt-5">
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
  name: 'home',
  data: function () {
    return {
      search: ''
    }
  },
  methods: {
    result: function () {
      this.$router.push({ name: 'results', params: {search: this.search} })
    }
  },
  created () {
  }
}
</script>
