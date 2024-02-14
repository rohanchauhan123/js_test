document.addEventListener('DOMContentLoaded', function () {
   const outsideClick = function (e) {
      const container = document.querySelector('.customDrp');
      if (!container.contains(e.target) && container.contains(e.target.parentNode) && container.classList.contains('active')) {
         container.classList.remove('active');
         document.removeEventListener('click', outsideClick);
      }
   };

   document.querySelectorAll('.custmonDropDwon').forEach(function (element) {
      element.addEventListener('click', function (e) {
         e.preventDefault();
         e.stopPropagation();

         if (e.target.classList.contains('crossString') || e.target.classList.contains('bowiro')) {
            return false;
         }

         if (e.target.tagName === 'A') {
            return true;
         }

         if (e.target.classList.contains('language') || e.target.parentNode.classList.contains('language')) {
            languageFunc();
         }

         if (window.matchMedia('(max-width: 1170px)').matches) {
            document.body.style.overflow = 'hidden';
         }

         if (e.target.classList.contains('searchCoinDrp')) {
            document.getElementById('tokensearch1').focus();
         }

         const customDrp = this.nextElementSibling;
         if (customDrp) {
            customDrp.classList.add('active');
         } else {
            this.querySelector('.customDrp').classList.add('active');
         }

         document.addEventListener('click', outsideClick);
      });
   });

   let basic_banner_read_btn = false;
   document.querySelectorAll('.basic_banner_read_btn').forEach(function (element) {
      element.addEventListener('click', function () {
         if (basic_banner_read_btn === false) {
            this.textContent = "Read Less";
            document.querySelector('.basic_banner_text').style.display = 'block';
            basic_banner_read_btn = true;
         } else {
            document.querySelector('.basic_banner_text').style.display = 'none';
            this.textContent = "Read More";
            basic_banner_read_btn = false;
         }
      });
   });

   document.querySelectorAll('.filterToggelBtn').forEach(function (element) {
      element.addEventListener('click', function () {
         document.querySelector('.filterToggel').classList.toggle('active');
      });
   });

   document.querySelectorAll('.hideCustomDrp').forEach(function (element) {
      element.addEventListener('click', function () {
         document.querySelector('.customDrp').classList.remove('active');
      });
   });

   document.querySelectorAll('.closeIcon').forEach(function (element) {
      element.addEventListener('click', function () {
         document.querySelector('.customPopup').classList.remove('active');
         document.querySelector('.commonPopup').classList.remove('active');

         if (!document.querySelector('.headerMain').classList.contains('active')) {
            document.body.style.overflow = 'auto';
         }
      });
   });

   document.querySelectorAll('.mainTable').forEach(function (element) {
      element.addEventListener('scroll', function (e) {
         const isScroll = e.currentTarget.scrollLeft;
         if (isScroll) {
            document.querySelectorAll('.ListingTable th:nth-child(3), td:nth-child(3)').forEach(function (element) {
               element.classList.add('before');
            });
         } else {
            document.querySelectorAll('.ListingTable th:nth-child(3), td:nth-child(3)').forEach(function (element) {
               element.classList.remove('before');
            });
         }
      });
   });
});
