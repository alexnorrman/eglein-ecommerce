import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { getShoppingBagTotalItems } from '../../reducer';
import Nav from "../nav/Nav";
import LocalMall from "@material-ui/icons/LocalMall";
import Favorite from "@material-ui/icons/Favorite";
import Person from "@material-ui/icons/Person";

function Header() {
    const [{shoppingBag}] = useStateValue();

    console.log(shoppingBag);

    return (
        <div>
            <div className="header">
                <svg className="header__svg" height="50" viewBox="0 0 796 1652" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.13344 458.952C0.823442 445.492 1.13344 431.822 0.503437 418.272C-0.00656295 407.592 0.043437 396.792 0.00343702 386.052C-0.056563 365.832 0.673464 345.632 1.84346 325.492C2.84346 308.432 4.68346 291.092 10.1835 274.922C16.1052 257.043 24.0218 239.888 33.7834 223.782C41.9134 210.582 50.3634 197.372 56.9434 183.202C62.3234 171.592 69.4434 160.902 76.3634 150.282C84.8081 137.628 94.3913 125.772 104.993 114.862C112.804 106.787 121.2 99.2998 130.113 92.4616C143.779 81.928 158.146 72.3359 173.113 63.7516C183.363 57.7516 194.053 52.6116 204.393 46.7516C214.313 41.1516 225.113 37.1016 235.553 32.4316C249.197 26.4167 263.165 21.1685 277.393 16.7116C285.393 14.1516 293.753 12.4116 301.913 10.2516C313.803 7.11157 325.973 5.93157 337.973 3.61157C345.573 2.14157 353.493 2.43157 361.233 1.61157C375.246 0.148769 389.345 -0.319068 403.423 0.211572C416.423 0.621572 429.563 1.27157 442.613 2.75157C453.543 4.00157 464.053 7.03157 474.903 8.54157C482.543 9.60157 489.903 12.7016 497.353 15.0816C513.623 20.3116 529.973 25.3116 546.073 31.0116C558.423 35.3716 570.333 40.6916 582.423 45.5616C594.143 50.2716 605.333 56.1316 616.423 62.0316C626.663 67.4716 637.023 72.7016 646.903 78.9216C657.219 85.3007 667.15 92.2829 676.643 99.8316C693.57 113.322 707.675 130.012 718.153 148.952C727.763 166.402 737.793 183.622 746.983 201.292C752.183 211.292 756.863 221.712 762.623 231.292C770.423 244.202 773.403 258.432 777.263 272.382C780.373 283.602 781.634 295.382 782.984 307.032C785.294 326.962 788.323 346.822 790.273 366.792C791.333 377.622 792.813 388.422 793.033 399.412C793.223 409.092 794.843 418.822 795.153 428.602C795.493 439.372 795.243 450.102 794.823 460.862C794.033 481.052 790.163 500.662 785.383 520.212C780.687 540.083 774.612 559.604 767.203 578.632C765.203 583.632 764.473 589.062 762.643 594.242C760.283 600.912 757.923 607.812 755.123 614.132C750.863 623.782 746.793 633.572 742.533 643.242C736.593 656.762 728.933 669.342 722.193 682.412C720.083 686.512 716.893 690.042 714.303 693.902C694.925 722.988 670.049 748.007 641.073 767.552C627.734 776.446 613.425 783.794 598.423 789.452C579.283 796.792 559.023 799.832 539.693 806.192C527.043 810.352 513.913 812.262 501.163 815.962C489.443 819.352 477.353 822.542 465.263 823.372C450.083 824.372 435.053 827.372 419.733 826.882C410.863 826.622 401.913 828.062 393.113 827.362C386.983 826.872 380.893 826.862 374.783 826.532C360.913 825.782 346.953 825.332 333.213 823.412C315.513 820.932 297.623 819.922 280.103 815.782C261.703 811.432 243.413 807.292 225.823 799.782C213.483 794.532 201.333 788.852 189.593 782.602C178.31 776.654 167.333 770.142 156.703 763.092C142.613 753.642 130.153 742.572 118.413 730.562C109.037 721.181 100.588 710.916 93.1835 699.912C81.3435 681.912 69.9335 663.582 59.6735 644.582C53.1235 632.442 46.5435 620.332 40.5235 607.902C35.5835 597.712 31.6234 587.162 27.3534 576.702C22.5534 564.962 19.4335 552.812 16.1235 540.702C13.9635 532.812 12.6835 524.702 11.1235 516.602C9.12346 506.472 8.19345 496.222 6.26345 486.122C4.60777 477.146 3.56204 468.069 3.13344 458.952V458.952ZM707.563 356.052H707.063C707.063 354.882 707.063 353.722 707.063 352.552C707.433 328.662 702.063 305.762 695.003 283.162C693.253 277.592 690.143 272.492 688.533 267.002C684.613 253.652 676.923 242.192 671.183 229.782C667.553 221.912 661.923 215.172 657.713 207.632C650.973 195.522 642.713 184.422 634.113 173.722C625.883 163.532 616.523 154.252 607.653 144.582C605.183 141.902 603.113 138.892 600.183 136.582C593.543 131.332 587.183 125.792 580.523 120.492C569.725 111.884 558.27 104.134 546.263 97.3116C533.063 89.7616 519.213 83.4916 505.363 77.2016C497.633 73.7016 489.473 71.4616 481.623 68.3416C476.743 66.4016 470.953 65.6216 466.013 63.6216C451.443 57.7216 436.013 55.3416 420.953 51.5216C412.878 49.5682 404.64 48.3664 396.343 47.9316C386.283 47.3016 376.233 44.9316 366.183 46.3316C360.423 47.1316 354.593 47.3916 348.923 47.6116C334.183 48.1916 320.323 52.9916 305.923 55.2616C298.183 56.4916 290.533 59.3516 282.923 61.2616C276.526 62.7301 270.207 64.5258 263.993 66.6416C254.823 69.8916 245.533 73.0816 236.353 76.1616C216.788 82.5671 198.102 91.3992 180.733 102.452C169.097 109.877 158.241 118.46 148.333 128.072C140.963 135.302 134.333 143.072 127.563 150.832C120.423 158.872 113.423 167.172 107.783 176.312C101.653 186.152 94.7835 195.452 89.1235 205.702C82.6168 217.602 76.5301 229.678 70.8634 241.932C67.7554 248.334 65.2318 255.005 63.3234 261.862C61.2134 270.052 57.1935 277.562 55.8035 286.062C54.9635 291.242 54.8034 296.682 53.2234 301.602C51.582 306.472 50.7214 311.572 50.6735 316.712C50.6735 336.092 49.6735 355.492 53.3735 374.772C56.1835 389.252 57.4635 404.002 61.3735 418.322C68.7935 445.612 77.8934 472.202 90.6134 497.582C95.6134 507.492 100.213 517.582 105.423 527.382C111.113 538.072 117.553 548.382 123.843 558.722C128.923 567.112 133.613 575.852 139.643 583.522C147.733 593.812 156.863 603.302 165.643 613.012C178.643 627.292 194.053 638.472 210.453 648.452C214.713 651.032 219.233 653.222 223.393 655.842C236.183 663.842 250.393 668.342 264.513 673.062C274.703 676.482 285.313 678.652 295.943 680.732C312.093 683.902 328.403 685.332 344.703 686.872C355.943 687.942 367.343 686.472 378.583 686.802C392.323 687.202 405.813 685.292 419.233 683.802C438.064 681.654 456.599 677.436 474.503 671.222C490.043 665.842 505.233 659.622 519.583 651.552C532.333 644.392 544.903 637.032 556.693 628.212C574.003 615.212 591.093 602.102 606.283 586.652C610.473 582.382 614.283 577.722 618.523 573.522C629.933 562.252 639.523 549.522 648.273 536.192C662.563 514.442 673.533 490.982 682.273 466.482C685.493 457.432 687.333 447.862 690.823 438.932C698.273 419.862 701.993 399.932 705.553 379.932C706.923 372.072 706.923 364.012 707.563 356.052V356.052Z" fill="black"/>
                    <path d="M726.254 1361.45C726.605 1377.94 725.991 1394.43 724.414 1410.84C722.524 1429.62 717.284 1447.48 711.764 1465.39C707.924 1477.87 701.883 1489.39 696.333 1500.93C690.433 1513.22 683.394 1525.18 674.004 1535.49C668.214 1541.84 663.004 1548.69 657.634 1555.43C653.864 1560.19 648.804 1563.49 644.514 1567.67C631.763 1580.03 617.864 1591.14 603.004 1600.85C591.294 1608.57 579.804 1616.7 567.134 1623.05C560.054 1626.59 552.854 1629.97 545.794 1633.6C539.394 1636.89 531.984 1638.15 525.164 1640.69C511.024 1645.95 496.014 1648.35 481.404 1649.18C463.144 1650.18 444.744 1652.12 426.254 1650.18C411.414 1648.58 396.474 1647.61 381.634 1645.84C366.554 1644.05 351.794 1640.48 337.024 1637.06C324.714 1634.21 312.814 1629.93 300.644 1626.64C288.705 1623.25 276.997 1619.1 265.594 1614.2C247.724 1606.79 230.104 1598.31 215.044 1585.84C203.298 1576.02 192.403 1565.23 182.474 1553.57C175.804 1545.82 169.034 1538.12 163.474 1529.49C154.024 1514.7 144.304 1500.14 137.844 1483.49C132.844 1470.6 127.844 1457.7 124.624 1444.31C121.894 1433.04 119.324 1421.66 118.374 1410.01C118.074 1406.38 116.794 1402.83 116.574 1399.2C115.484 1381.53 114.644 1363.95 115.964 1346.15C117.483 1326.45 120.107 1306.86 123.824 1287.45C127.214 1269.45 130.754 1251.51 137.114 1234.12C146.424 1208.69 158.404 1184.74 174.444 1163.12C186.754 1146.48 199.754 1130.34 215.444 1116.38C228.856 1104.49 243.725 1094.36 259.694 1086.22C270.864 1080.46 283.044 1075.91 295.984 1074.66C301.424 1074.13 306.714 1071.77 311.984 1071.51C320.764 1071.07 329.064 1068.19 337.844 1067.8C346.234 1067.42 354.494 1064.87 362.844 1064.16C373.084 1063.3 383.184 1061.39 393.424 1060.49C401.804 1059.75 410.254 1059.06 418.614 1058.56C429.124 1057.93 439.754 1057.3 450.374 1058.56C463.374 1060.1 476.474 1060.56 489.444 1062.2C503.814 1064.01 518.024 1066.53 531.764 1071.79C545.764 1077.15 559.474 1082.96 572.104 1091.11C584.734 1099.26 597.224 1107.48 608.504 1117.24C615.224 1123.06 622.034 1129.24 627.664 1136C635.984 1146 644.664 1155.76 652.284 1166.45C658.494 1175.19 664.893 1183.96 670.523 1192.96C678.043 1204.96 685.073 1217.43 691.523 1230.16C698.953 1244.77 705.644 1259.68 710.624 1275.23C714.772 1288.34 718.214 1301.66 720.934 1315.14C724.424 1331.39 724.234 1347.8 726.254 1361.45ZM355.664 1528.65C367.784 1528.84 379.124 1526.95 390.534 1526.12C409.854 1524.73 428.734 1521.33 447.534 1517.02C455.764 1515.13 463.774 1512.57 471.824 1510.02C478.564 1507.86 485.534 1506.2 491.984 1503.28C502.984 1498.28 514.284 1494.06 525.144 1488.65C537.059 1482.8 548.518 1476.07 559.424 1468.5C575.424 1457.23 589.924 1443.87 601.594 1427.84C615.594 1408.57 626.184 1387.62 631.594 1364.34C634.66 1351.27 636.409 1337.93 636.814 1324.51C637.394 1304.51 634.424 1285.31 628.904 1266.31C622.714 1244.96 613.464 1224.96 602.524 1205.65C596.744 1195.46 589.404 1186.45 582.634 1177C574.327 1165.54 564.542 1155.23 553.534 1146.33C538.924 1134.33 523.064 1124.33 505.434 1117.46C497.234 1114.24 489.044 1110.63 480.514 1108.72C455.374 1103.1 429.744 1101.36 404.054 1100.41C399.704 1100.25 395.394 1101.19 391.124 1100.76C374.514 1099.11 358.124 1100.76 341.654 1102.97C329.224 1104.64 317.464 1108.72 305.444 1111.78C294.194 1114.64 283.824 1120.16 273.504 1125.37C262.124 1131.11 250.834 1137.44 241.264 1145.89C226.574 1158.89 213.334 1173.12 203.114 1190.22C194.574 1204.51 187.174 1218.97 182.494 1235.06C178.313 1249.88 175.004 1264.92 172.584 1280.12C169.914 1296 170.834 1311.88 169.914 1327.72C169.124 1341.39 171.294 1355.18 173.574 1368.81C175.994 1383.26 178.794 1397.65 183.924 1411.33C187.705 1421.45 192.165 1431.3 197.274 1440.82C198.884 1443.82 201.624 1445.88 203.034 1448.92C207.264 1458.07 213.574 1465.92 220.404 1472.99C229.071 1482.17 238.583 1490.5 248.814 1497.89C265.657 1509.78 284.53 1518.5 304.504 1523.62C321.474 1527.98 338.744 1530.04 355.664 1528.65V1528.65Z" fill="black"/>
                </svg>
                <h1 className="header__h1">eglein</h1>
            </div>
           {/*<Nav className="header__nav"/>*/}
        </div>
    )
}

export default Header
