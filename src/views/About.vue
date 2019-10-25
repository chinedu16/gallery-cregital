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
              <h1 class="mb-0"><a class="text-black h2 mb-0" @click="home" style="text-decoration: none;">Cregital<span class="text-primary">.</span></a></h1>
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
        <h1>Search Results for "{{input.search}}"</h1>
        <el-dropdown split-button trigger="click" type="primary" @click="handleClick"> Sort By
          <el-dropdown-menu>
            <el-dropdown-item value='views'>views</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        
        <div class="row no-gutters" id="lightgallery">
          <div v-for="image in images" :key="image.id" class="col-sm-6 col-md-4 col-lg-3 col-xl-3 item" data-aos="fade" @click="details(image)">
            <img :src="image.src.original" height="600" alt="IMage" class="img-fluid">
          </div>
        </div>
      </div>
    </div>


    <div class="py-3 mb-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12 d-md-flex align-items-center" style="justify-content: center;">
            <el-button-group>
              <el-button type="primary" v-show="prev" @click="prev_page" icon="el-icon-arrow-left">Previous Page</el-button>
              <el-button type="primary" v-show="next" @click="next_page">Next Page<i class="el-icon-arrow-right el-icon-right"></i></el-button>
            </el-button-group>
          </div>
        </div>
      </div>
    </div>


    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="mb-5">
              <h3 class="footer-heading mb-4">About Cregital</h3>
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
            Copyright &copy; All rights reserved | Cregital
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
import api from '../api/index';
export default {
  data: function () {
    return {
      input: {
        search: ''
      },
      images: '',
      error: '',
      sort: '',
      next: '',
      prev: ''
    }
  },
  methods: {
    handleClick() {
      alert('button click');
    },
    home : function () {
      this.$router.push('/')
    },
    getImages: async function (search) {
      try {
        const response = await api.search(search)
        this.images = response.data.photos
        this.next = response.data.next_page
        this.prev = response.data.prev_page
      } catch (error) {
        this.error = error
      }
    },
    details: function (image) {
      this.$router.push({ name: 'details', params: {image: image} })
    },
    next_page: async function () {
      try {
        const response = await api.next(this.next)
        this.images = response.data.photos
        this.next = response.data.next_page
        this.prev = response.data.prev_page
      } catch (error) {
        this.error = error
      }
    },
    prev_page: async function () {
      try {
        const response = await api.next(this.prev)
        this.images = response.data.photos
        this.next = response.data.next_page
        this.prev = response.data.prev_page
      } catch (error) {
        this.error = error
      }
    }
  },
  created () {
    this.input.search = this.$route.params.search
    this.getImages(this.$route.params.search)
    if (!this.$route.params.search) {
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
