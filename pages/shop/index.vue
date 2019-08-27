<template>
  <div class="container">
    <div class="top-2h-container goods-cat-container">
      <div class="content-container">
        <div v-html="data" class="goods-list qtk-goods-list">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
export default {
    layout: 'shop_layouts',
    computed: {
      data() {
        return this.$store.state.tag.next_data
      },
    }
  // components: {
  //   Logo
  // }
}
</script>

<style lang="less" scoped>
@goods-width: 230px;
@goods-height-fix: @goods-width *  1.598;
@margin-bottom: 25px;
@getVersion: 20190730001;
//@goods-height: @goods-width * 2.232;
//@goods-height: 470px;
.container {
    background-color: #F3F4F5;
    .top-2h-container {
      display: flex;
      justify-content: center;
      width: 100%;
      min-height: 500px;
      align-items: flex-start;
      flex-wrap: wrap;
      transition: background 0.2s;
      padding-bottom: 100px;
      position: relative;
      .content-container {
          width: 1200px;
          display: flex;
          margin-top: 209px;
          flex-direction: column;
          .goods-list {
            display: flex;
            width: 1200px;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 30px;
        }
      }
      &.goods-cat-container {
        background: #f3f4f5;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
  }
}
/deep/ .qtk-goods-list {
  i {
        font-style: normal;
  }
  .goods-container-fixed {
    width: @goods-width;
    height: @goods-height-fix;
    overflow: hidden;
    margin-bottom: @margin-bottom;
    border: none;
    .media-list-text-box {
        width: 0;
        height: 0;
        overflow: hidden;
    }
    .goods-container {
      width: @goods-width;
      //height: @goods-height;
      display: block;
      position: relative;
      background-color: #fff;
      border: none;

      @button-height: 30px;
      @mask-height: @goods-width - @button-height ;

      .links {
        display: none;
        //display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: @goods-width;
        height: @goods-width;


        .mask {
          display: flex;
          height: @mask-height;
          width: @goods-width;
          line-height: @mask-height;
          justify-content: center;
          align-content: center;
          background-color: #1C293C;
          opacity: 0.1;
          color: #fff;
          font-size: 16px;
          text-decoration: none;

          &:hover {
            opacity: 0.1;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          }
        }

        .offline-img {
          @img-width: 115px;
          width: @img-width;
          height: @img-width;
          background: -236px -27px url("/css/images/top.png") no-repeat;
          position: absolute;
          left: @goods-width / 2 - @img-width / 2;
          top: @mask-height / 2 - @img-width / 2;
        }

        .offline {
          display: flex;
          height: @mask-height;
          width: @goods-width;
          line-height: @mask-height;
          justify-content: center;
          align-content: center;
          font-size: 16px;
          text-decoration: none;
          background: #1c293c;
          opacity: 0.4;
        }

        &.offline {
          display: flex;
          position: absolute;
          z-index: 150;
        }

        .button-container {
          display: flex;
          width: @goods-width;
          background-color: #d4d4d4;
          justify-content: space-between;
          opacity: 0.8;

          .button {
            width: @goods-width/2;
            height: @button-height;
            background-color: #ffffff;
            font-weight: 400;
            color: #474747;
            opacity: 0.9;
            font-size: 12px;
            justify-content: center;
            text-align: center;
            line-height: @button-height;
            text-decoration: none;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            &:hover {
              //color: #E1B263;
              opacity: 0.8;
            }
          }

          .right {
            border-left: 1px solid #d4d4d4;
          }
        }
      }

      .links-mask-text {
        display: none;
        position: absolute;
        height: @mask-height;
        width: @goods-width - 1px;
        line-height: @mask-height;
        justify-content: center;
        align-content: center;
        z-index: 160;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        color: #ffffff;

        &:hover {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .ju-and-tao {
          font-size: 18px;
        }
      }

      .links-mask-text-act {
        position: absolute;
        height: @goods-width;
        width: @goods-width;
        line-height: @mask-height;
        justify-content: center;
        align-content: center;
        z-index: 149;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        color: #ffffff;
        background: #1c293c;
        opacity: 0.4;
      }

      .label-ju-mini {
        justify-self: flex-end;
        display: flex;
        width: 72px;
        height: 26px;
        background: -315px -24px url("/css/images/ju_tao/icon.png?t=1") no-repeat;
        position: absolute;
        z-index: 159;
        right: 10px;
      }

      .label-ju-full {
        justify-self: flex-end;
        display: flex;
        width: 73px;
        height: 48px;
        background: -39px -25px url("/css/images/ju_tao/icon.png?t=1") no-repeat;
        position: absolute;
        z-index: 159;
        right: 10px;

      }

      .label-tao-mini {
        justify-self: flex-end;
        display: flex;
        width: 72px;
        height: 26px;
        background: -223px -24px url("/css/images/ju_tao/icon.png?t=1") no-repeat;
        position: absolute;
        z-index: 159;
        right: 10px;
      }

      .label-tao-full {
        justify-self: flex-end;
        display: flex;
        width: 73px;
        height: 48px;
        background: -131px -25px url("/css/images/ju_tao/icon.png?t=1") no-repeat;
        position: absolute;
        z-index: 159;
        right: 10px;


      }

      .top-rank-container {
        position: absolute;
        z-index: 151;
        width: 39px;
        height: 40px;
        background: -165px -92px url("/css/images/top.png") no-repeat;
        left: 20px;
        display: flex;

        .num {
          width: 39px;
          text-align: center;
          color: #ffffff;
          line-height: 22px;
          font-size: 16px;
          font-weight: 600;
          margin-top: 15px;
        }
      }


      .pub-time {
        background: #e29814;
        opacity: 0.85;
        color: #ffffff;
        font-size: 14px;
        text-align: center;
        padding: 2px 10px;
        position: absolute;
        z-index: 350;
        top: @goods-width - 30px;
        left: 6px;
        transition: top 0.15s;
      }

      .coupon-progress-container-bg {
        position: absolute;
        //background-color: #fff;
        width: @goods-width;
        @height: 83px;
        height: @height;
        top: @goods-width - @height;
        transition: top 0.15s;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.86) 100%);

        .coupon-progress-container {
          font-size: 12px;
          position: absolute;
          width: @goods-width - 24px;
          bottom: 14px;
          left: 12px;

          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .progress-count {
            width: 130px;
            height: 8px;
            background: #ffffff;
            opacity: 0.5;
            display: flex;
            border-radius: 4px;

            .current {
              background: #F93434;
              display: flex;
              border-radius: 4px;
              justify-items: flex-start;
            }
          }

          .text {
            height: 16px;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: #ffffff;
            line-height: 14px;
          }

        }

      }


      .top-2h-text-container {
        @top-text-container-height: 30px;
        top: @goods-width - @top-text-container-height;
        background: #333f4b;
        opacity: 0.9;
        width: @goods-width;
        position: absolute;
        z-index: 350;
        transition: top 0.15s;
        height: @top-text-container-height;
        display: flex;

        .text-container {
          width: @goods-width;
          height: @top-text-container-height;
          display: flex;
          justify-content: center;
          line-height: @top-text-container-height;
          color: #ffffff;
          font-size: 14px;

          span {
            color: #FFEF00;
            padding: 0 3px;
          }

          .hot-text-container {
            width: @goods-width;
            height: @top-text-container-height;
            display: flex;
            justify-content: space-between;
            line-height: @top-text-container-height;
            color: #ffffff;
            font-size: 14px;

            .hot-text {
              margin-left: 14px;
            }

            .sales-text {
              margin-right: 14px;
            }
          }
        }
      }

      .img-container {
        width: @goods-width;
        height: @goods-width;
        display: block;

        a {
          width: @goods-width;
          height: @goods-width;
          display: flex;
          line-height: @goods-width;
          text-align: center;

          img {
            width: @goods-width;
            height: @goods-width;
          }
        }
      }

      @left-white: 12px;
      @content-width: @goods-width - @left-white * 2;

      .info-container {
        display: flex;
        justify-content: center;
        width: @goods-width;
        flex-wrap: wrap;

        .yong-jing-container {
          width: @content-width;
          justify-content: space-between;
          display: flex;
          align-items: baseline;
          padding: 11px 0;

          .value {
            justify-content: left;
            align-items: baseline;
            display: flex;

            .text {
              color: #FF4400;
              font-family: '微软雅黑 Bold';
              display: flex;
              font-size: 12px;
            }

            .money {
              font-size: 16px;
              color: #FF4400;
              display: flex;
              margin-left: 3px;
              //font-family: '微软雅黑 Bold';
            }
          }

          .percent {
            color: #969696;
            font-size: 12px;
            display: flex;
          }
        }

        .title-container {
          width: @content-width;
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;

          a {
            text-decoration: none;
            color: #474747;
            font-size: 12px;
            white-space: nowrap;
            width: @content-width;
            text-overflow: ellipsis;
            display: block;
            overflow: hidden;

            &:hover {
              text-decoration: underline;
            }
          }

        }

        .price-container {
          width: @content-width;
          justify-content: space-between;
          display: flex;
          align-items: baseline;
          padding: 11px 0;

          .price {
            justify-content: left;
            align-items: baseline;
            display: flex;

            .text {
              color: #969696;
              font-family: '微软雅黑 Bold';
              display: flex;
              font-size: 12px;
            }

            .money {
              font-size: 14px;
              color: #555555;
              display: flex;
              margin-left: 3px;
              font-weight: bold;
              //font-family: '微软雅黑 Bold';
            }
          }

          .sale {
            color: #969696;
            font-size: 12px;
            display: flex;
          }

        }
        .price_first {
          .price {
            .money {
              font-size: 16px;
              margin-right: 5px;
              color: #FF4400;
            }
            .text {
              color: #FF4400;
            }
          }
          .month_sales {
            color: #FF4400;
          }
          .price_fist_num {
            font-size: 12px;
            color: #4A4A4A;
            margin-left: 4px;
            font-weight: bold;
          }
          &.shop_name_box {
            width: 204px;
            display: flex;
            justify-content: flex-start;
            padding: 4px 0;
            .text {
              font-size:12px;
              color:rgba(71,71,71,1);
            }
            .shop {
              background: url("/css/images/goods-extension.png") no-repeat;
              margin-right: 2px;
              background-position: -71px -4px;
              width: 16px;
              height: 16px;
            }
          }
       }
       .buyer_style {
         .price {
          .money {
            color: #FF0036;
          }
          .text {
            color: #FF0036;
          }
         }
         .month_sales {
          color: #FF0036;
        }
        &.icon-container {
           margin: 9px 0;
           .tag-container {
             align-items: center;
            .tag {
              border: 1px solid #FF0036;
              background: #FF0036;
              color: #fff;
              margin-right: 0px;
            }
          }
        }
       }
       .common_icon2 {
          display: flex;
          background-image: url(/css/images/goods-extension.png?t=20190730010);
          background-repeat: no-repeat; 
          width: 18px;
          height: 18px;
          margin-left: 6px;
          &.tianmao {
            background-position: -4px -25px;
          }
          &.taobao {
            background-position: -73px -25px;
          }
          &.ju_hua_suan {
            background-position: -27px -25px;
          }
          &.tao_qiang_gou {
            background-position: -50px -25px;
          }
       }
       .common_icon1 {
          display: flex;
          background-image: url(/css/images/icon1.png?t=20190411002);
          background-repeat: no-repeat; 
          width: 16px;
          height: 16px;
          margin-right: 6px;
          &.tianmao {
            background-position: -229px -20px;
          }
          &.taobao {
            background-position: -194px -20px;
          }
          &.ju_hua_suan {
            background-position: -20px -149px;
          }
          &.tao_qiang_gou {
            background-position: -41px -149px;
          }
       }

        .icon-container {
          width: @content-width;
          justify-content: space-between;
          display: flex;
          align-items: flex-start;

          .tag-container {
            display: flex;
            justify-content: flex-start;
            width: @content-width - 50px;
            flex-wrap: wrap;
            overflow: hidden;
            line-height: 16px;
            height: 18px;
            align-items: flex-start;


            .tag {
              // color: #E1B263;
              color: rgba(251, 104, 104, 1);
              font-size: 12px;
              line-height: 16px;
              border-radius: 2px;
              // border: 1px solid #E1B263;
              border: 1px solid rgba(251, 104, 104, 1);
              padding: 0 3px;
              white-space: nowrap;
              margin-right: 4px;
            }

            .lg {
              font-style: italic;
              color: #ffffff;
              border: none;
              background: linear-gradient(135deg, #df2e1d, #ffa924);
              line-height: 18px;
              font-weight: bold;
            }

            //618相关。结束后可删除
            .tag618 {
              background: -369px -158px url(/css/images/act618/icon.png) no-repeat;
              width: 32px;
              height: 18px;
              border: none;
            }

          }

          .source {
            display: flex;

            .tag {
              // color: #FFC1BE;
              color: rgba(251, 104, 104, 1);
              font-size: 12px;
              line-height: 16px;
              border-radius: 2px;
              // border: 1px solid #FFC1BE;
              border: 1px solid rgba(251, 104, 104, 1);
              padding: 0 3px;
            }
          }
        }
      }

      .extension-container {
        display: flex;
        justify-content: flex-start;
        width: @goods-width - 2px;
        flex-wrap: wrap;
        padding-left: @left-white;
        margin-top: 20px;
        margin-bottom: 15px;

        .line {
          width: @goods-width - 2px - @left-white *2;
          display: flex;
          justify-content: flex-start;
          padding: 4px 0;

          i {
            background: url("/css/images/goods-extension.png?t=@{getVersion}") no-repeat;
          }

          .quan {
            background-position: -47px -5px;
            width: 16px;
            height: 16px;
          }

          .shop {
            background-position: -71px -4px;
            width: 16px;
            height: 16px;
          }

          .avatar {
            background-position: -23px -4px;
            width: 16px;
            height: 16px;
          }

          .time {
            background-position: -3px -4px;
            width: 16px;
            height: 16px;
          }
          .yongjin {
            background-position: -93px -4px;
            width: 16px;
            height: 16px;
          }

          .jubao {
            background-position: -114px -4px;
            width: 16px;
            height: 16px;
            
          }

          
          .text {
            color: #474747;
            line-height: 16px;
            font-size: 12px;
            padding-left: 2px;
            a:hover {
              color: rgb(255, 68, 0);
            }
          }
        }
      }


      &:hover {
        position: absolute;
        z-index: 160;
        border: 1px solid #ff4400;
        margin-left: -1px;
        margin-top: -1px;

        .links {
          display: flex;
          position: absolute;
          z-index: 150;
        }

        .pub-time {
          top: @goods-width - 30px - @button-height;
        }

        .coupon-progress-container-bg {
          //top: @goods-width - 30px - @button-height;
          top: @goods-width - 83px - @button-height
        }

        .top-2h-text-container {
          top: @goods-width - 28px - @button-height;
        }

        .links-mask-text {
          display: block;
        }
      }
    }
    &.goods-container-fixed-new {
        @goods-width: 162px;
        @goods-height: 302px;
        @left-white: 11px;
        @content-width: @goods-width - @left-white * 2;
          width: @goods-width;
          // height: @goods-height;
           height:auto;
           overflow: initial;
          .goods-container {
            width: @goods-width;
            // height: @goods-height;
            height: 100%;
            background-color: #fff;
            overflow: hidden;
            border: 1px solid #fff;
            position: relative;
            padding-bottom: 44px;
            box-sizing: border-box;
            border: 1px solid #E4E4E4;
            .links-mask-text {
              display: none;
              position: absolute;
              height: @goods-width;
              width: @goods-width - 1px;
              line-height: @goods-width;
            }
            .img-container {
              width: @goods-width - @left-white * 2;
              height: @goods-width - @left-white * 2;
              margin-top: @left-white - 1;
              margin-left: @left-white - 1;     
              a {
                width: @goods-width - @left-white * 2;
                height: @goods-width - @left-white * 2;
                line-height: @goods-width - @left-white * 2;      
                img {
                  width: @goods-width - @left-white * 2;
                  height: @goods-width - @left-white * 2;
                }
              }
            }
            .info-container {
              display: flex;
              justify-content: center;
              width: @goods-width;
              flex-wrap: wrap;
      
              .yong-jing-container {
                width: @content-width;
                justify-content: space-between;
                display: flex;
                align-items: center;
                padding: 8px 0;
                border-top: solid 1px #eee;
                margin-top: 8px;
                position: absolute;
                bottom: 0px;
                .tm_cs{
                  color: #fff;
                  font-size: 12px;
                  line-height: 16px;
                  border-radius: 2px;
                  border: 1px solid rgba(0, 178, 98, 1);
                  padding: 0 3px;
                  white-space: nowrap;
                  background-color: rgba(0, 178, 98, 1);
                  &:hover {
                    background-color: rgba(0, 138, 77, 1);
                  }
                }
                .tm_shop{
                  color: #333333;
                  font-size: 12px;
                  line-height: 16px;
                  // border-radius: 2px;
                  // border: 1px solid #fb6868;
                  padding: 0 3px;
                  white-space: nowrap;
                  &:hover {
                    color: rgb(227, 20, 54);
                  }
                }
                .tm_qjd{
                  color: #fff;
                  font-size: 12px;
                  line-height: 16px;
                  border-radius: 2px;
                  border: 1px solid rgba(138, 110, 97, 1);
                  padding: 0 3px;
                  white-space: nowrap;
                  background-color: rgba(138, 110, 97, 1);
                  &:hover {
                    background-color: rgba(113, 89, 79, 1);
                  }
                }
                .value {
                  justify-content: left;
                  align-items: baseline;
                  display: flex;
      
                  .text {
                    color: #FF4400;
                    font-family: '微软雅黑 Bold';
                    display: flex;
                    font-size: 12px;
                  }
      
                  .money {
                    font-size: 16px;
                    color: #FF4400;
                    display: flex;
                    margin-left: 3px;
                    //font-family: '微软雅黑 Bold';
                  }
                }
      
                .percent {
                  color: #999999;
                  font-size: 12px;
                  display: flex;
                  // white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  flex-grow: 1;
                  flex-wrap: wrap;
                  height: 16px;
                  align-items: center;
                }
              }
      
              .title-container {
                width: @content-width;
                display: block;
                white-space: normal;
                text-overflow: ellipsis;
                overflow: hidden;
                height: 40px;
                a {
                  text-decoration: none;
                  color: #666666;
                  line-height: 20px;
                  font-size: 12px;
                  white-space: normal;
                  width: @content-width;
                  text-overflow: ellipsis;
                  display: block;
                  overflow: hidden;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  
                  &:hover {
                    text-decoration: underline;
                  }
                }
      
              }
      
              .price-container {
                width: @content-width;
                justify-content: space-between;
                display: flex;
                align-items: baseline;
                padding: 8px 0;
      
                .price {
                  justify-content: left;
                  align-items: baseline;
                  display: flex;
      
                  .text {
                    color: #969696;
                    font-family: '微软雅黑 Bold';
                    display: flex;
                    font-size: 12px;
                  }
      
                  .money {
                    font-size: 14px;
                    color: #555555;
                    display: flex;
                    margin-left: 3px;
                    font-weight: 400;
                    font-family: 'Verdana Normal', 'Verdana';
                    //font-family: '微软雅黑 Bold';
                  }
                }
      
                .sale {
                  color: #969696;
                  font-size: 12px;
                  display: flex;
                }
      
              }
              .price_first {
                .price {
                  .money {
                    margin-right: 5px;
                    font-size: 22px;
                    color: #E31436;
                  }
                  .text {
                    color: #FF4400;
                  }
                }
                .month_sales {
                  color: #FF4400;
                }
                .price_fist_num {
                  font-size: 12px;
                  color: #666;
                  margin-left: 0px;
                  font-weight: 700;
                  white-space: nowrap;
                  font-family: 'Verdana Negreta', 'Verdana Normal', 'Verdana';
                }
                .yongjin_name {
                  width:30px;
                  flex-shrink: 0;
                }
                &.shop_name_box {
                  width: 204px;
                  display: flex;
                  justify-content: flex-start;
                  padding: 4px 0;
                  .text {
                    font-size:12px;
                    color:rgba(71,71,71,1);
                  }
                  .shop {
                    background: url("/css/images/goods-extension.png") no-repeat;
                    margin-right: 2px;
                    background-position: -71px -4px;
                    width: 16px;
                    height: 16px;
                  }
                }
             }
             .buyer_style {
               .price {
                .money {
                  color: #FF0036;
                }
                .text {
                  color: #FF0036;
                }
               }
               .month_sales {
                color: #FF0036;
              }
              &.icon-container {
                 margin: 9px 0;
                 .tag-container {
                   align-items: center;
                  .tag {
                    border: 1px solid #FF0036;
                    background: #FF0036;
                    color: #fff;
                    margin-right: 0px;
                  }
                }
              }
             }
             .common_icon2 {
                display: flex;
                background-image: url(/css/images/goods-extension.png?t=20190730010);
                background-repeat: no-repeat; 
                width: 18px;
                height: 18px;
                margin-left: 6px;
                &.tianmao {
                  background-position: -4px -25px;
                }
                &.taobao {
                  background-position: -73px -25px;
                }
                &.ju_hua_suan {
                  background-position: -27px -25px;
                }
                &.tao_qiang_gou {
                  background-position: -50px -25px;
                }
             }
             .common_icon1 {
                display: flex;
                background-image: url(/css/images/icon1.png?t=20190411002);
                background-repeat: no-repeat; 
                width: 16px;
                height: 16px;
                margin-right: 6px;
                &.tianmao {
                  background-position: -229px -20px;
                }
                &.taobao {
                  background-position: -194px -20px;
                }
                &.ju_hua_suan {
                  background-position: -20px -149px;
                }
                &.tao_qiang_gou {
                  background-position: -41px -149px;
                }
             }
      
              .icon-container {
                width: @content-width;
                justify-content: space-between;
                display: flex;
                align-items: flex-start;
      
                .tag-container {
                  display: flex;
                  justify-content: flex-start;
                  width: @content-width;
                  margin-top: 7px;
                  flex-wrap: wrap;
                  overflow: hidden;
                  line-height: 16px;
                  height:auto;
                  align-items: flex-start;
      
      
                  .tag {
                    // color: #E1B263;
                    color: #E31436;
                    font-size: 12px;
                    line-height: 16px;
                    border-radius: 2px;
                    // border: 1px solid #E1B263;
                    border: 1px solid #E31436;
                    padding: 0 3px;
                    white-space: nowrap;
                    margin-right: 4px;
                    margin-top: 3px;
                    cursor: default;
                    &.quan_tag {
                      color: rgb(51, 51, 51);
                      border-color: rgba(204, 204, 204, 1);
                      cursor: pointer;
                      &:hover {
                        color: rgb(227, 20, 54);
                      }
                    }
                    &.sl_bj_tag{
                      cursor: default;
                    }
                  }
      
                  .lg {
                    font-style: italic;
                    color: #ffffff;
                    border: none;
                    background: linear-gradient(135deg, #df2e1d, #ffa924);
                    line-height: 18px;
                    font-weight: bold;
                  }
      
                  //618相关。结束后可删除
                  .tag618 {
                    background: -369px -158px url(/css/images/act618/icon.png) no-repeat;
                    width: 32px;
                    height: 18px;
                    border: none;
                  }
      
                }
      
                .source {
                  display: flex;
      
                  .tag {
                    // color: #FFC1BE;
                    color: rgba(251, 104, 104, 1);
                    font-size: 12px;
                    line-height: 16px;
                    border-radius: 2px;
                    // border: 1px solid #FFC1BE;
                    border: 1px solid rgba(251, 104, 104, 1);
                    padding: 0 3px;
                  }
                }
              }
            }
            .extension-container {
              display: none;
            }
            &:hover {
              position: relative;
              z-index: 160;
     
              box-shadow: 0px 2px 5px 0px #d9d9d9;
              margin-left: auto;
              margin-top: auto;
              box-sizing: border-box;
      
              .links {
                display: none;
                position: absolute;
                z-index: 150;
                
              }  
              .links-mask-text {
                display: block;
              }
            }
          }
    }
  }
}
</style>