<template>
  <div>
    <div>
      <div id="container-areas-contents">
        <div><img id="areas-image" src="../assets/img/areas11.jpg" width="80%" height="80%"></div>
        <div id="text-description-areas">
          <p>Text</p>
        </div>
      </div>
      <div class="flex-container">
        <div>
          <img class="area-logo-image" src="../assets/img/Database/db-logo.png">
          <button class="btn-1 title-area-areas">Data Base</button>
          <p class="description-area-areas">With
            Toptech databases, you don’t need to worry about database management tasks such as server provisioning, patching, configuration, or backups.
          </p>
        </div>
        <div>
          <img class="area-logo-image" src="../assets/img/IoT/IOT.png">
          <button class="btn-1 title-area-areas">IoT</button>
          <p class="description-area-areas">With the proliferation of devices, you increasingly need solutions to connect them, and collect, store, and analyze device data.</p>
        </div>
        <div>
          <img class="area-logo-image" src="../assets/img/Security/security-logo.png">
          <button class="btn-1 title-area-areas">Security</button>
          <p class="description-area-areas">Security concerns dominate how we outsource computation. Emerging security technology will fundamentally change future IT systems.</p>
        </div>
        <div>
          <img class="area-logo-image" src="../assets/img/MachineLearning/ml-logo.png">
          <button class="btn-1 title-area-areas">Machine Learning</button>
          <p class="description-area-areas">Explore machine learning services that fit your business needs, and learn how to get started.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Areas',
  layout: 'default'
}
</script>
<style scoped>
.flex-container {
  margin: inherit;
  horiz-align: center;
  display: flex;
  align-items: end;
  justify-content: center;
  background-color: DodgerBlue;
  height: 100%;
}
.flex-container > div {
  flex-direction: column;
  background-color: #f1f1f1;
  align-items: baseline;
  margin: 10px;
  horiz-align: center;
  padding: 20px;
  font-size: 30px;
  width: 130px;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  height: 100%;
}
/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 500px) {
  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    horiz-align: center;
    align-items: center;
    background-color: white;
    height: 100%;
  }
}
#areas-image {
  position: relative;
  width: 80%;
  height: 80%;
  opacity: 0.6;
}
#container-areas-contents {
  position: relative;
  text-align: center;
}
#text-description-areas{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
.title-area-areas {
  font-size: 18px;
  position: relative;
}
.area-logo-image{
  height: 90%;
  width: 90%;
  position: relative;
}
.description-area-areas {
  font-size: 12px;
}
.btn-1 {
  background: #0F0F6D;
  color: #ffffff;
  cursor: pointer;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: auto;
  position: relative;
}
</style>