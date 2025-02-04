window.addEventListener('load',function(){
    var selectall= document.querySelector('.check-box')
    var checkbox = this.document.querySelectorAll('.checkbox')
    var customcheckbox = this.document.querySelector('.custom-checkbox')
    var shoppingcartlist = this.document.querySelector('.shopping-cart-list')
    var label = shoppingcartlist.querySelectorAll('label')
    var num = 0
    var flag = false
    var btnbox = this.document.querySelectorAll('.btn-box')
    var shoppingcartlist = this.document.querySelector('.shopping-cart-list')
    var dishcontent = shoppingcartlist.querySelectorAll('.dish-content')
    var add = []
    var subtract = []
    var addnum = 0
    var count = []
    var price = []
    var totalcount = this.document.querySelector('.total-count')
    var totalprice = this.document.querySelector('.total-price')
    var counts = 0
    var subtractcount = 0
    var prices = 0
    var subtractprice = 0
    var checkboxnum = 0
    var visiblenum = 0
    var checkboxtrue = 0
    var imgbox = this.document.querySelector('.img-box')
    var carouselimg = imgbox.querySelectorAll('.carousel-img')
    // start-------------------------------------------------------------------------------------------------------------------------------
    // 给全选框按钮绑定选定状态事件，让所有的复选框的选中状态跟随全选框的选中状态，并且在全选框被选中时让每个仿复选框的文本内容打上勾，仿全选框的文本内容也
    // 打上勾，接着把flag的值设定为true，以防用户点击全选之后，立马又点击取消全选而else语句因为flag为false值而不执行，接着让num变量的值设为复选框的数量,
    // 目的是为了如果用户点击了全选按钮之后，接着点击了餐品的仿复选框按钮，执行了num--的语句而让num变为负数。
    selectall.addEventListener('change',function(){
        var allcount = 0
        var allprice = 0
        // 先判断用户是否在没有选购餐品后直接点击全选按钮，接着伪全选按钮做出相应变化就好。
        if(this.checked){
            customcheckbox.innerText = '✔'
        }
        else{
            customcheckbox.innerText = ''
        }
        for(l = 0;l < dishcontent.length;l++){
            // 加这个if语句是为了让接下来的所有操作都建立在用户已经选购了餐品的前提下进行，然后再去判断用户是否选中了全选按钮或未选中，再去执行相应语句。
            if(dishcontent[l].style.visibility == 'visible'){
                allprice = allprice + Number(price[l].innerText.substring(1,price[l].innerText.length))
                allcount = allcount + Number(count[l].innerText)
                if(this.checked){
                // 利用for循环遍历出已经显示就是是用户点击了添加按钮所指定的相对应的餐品，然后声明两个新变量，并在每次全选框的选中状态发生变化时重新赋值为0，好让每一次的计算都
                // 精准无误，然后用这两个变量去加每一个已经显示的指定餐品的总数量值和总价格值,最后输出最终的累加的数量值和价格值，这个是更新过后的代码，目前没有发生任何bug，下面这段
                // 话是上个版本所出现的问题，（不过在我的html代码中，price里面原本是有美元符号加餐品价格的，不知道为什么到这里就变成0了）。
        totalcount.innerText = 'Total Count:' + allcount
        totalprice.innerText = 'Total Price:' + allprice
        }
        else{
            totalcount.innerText = 'Total Count:'
            totalprice.innerText = 'Total Price:'
        }
        for(i = 0;i < checkbox.length;i++){
            if(dishcontent[i].style.visibility == 'visible'){
                if(this.checked){
                checkbox[i].checked = true
                label[i].innerText = '✔'
                customcheckbox.innerText = '✔'
                flag = true
            }
            // 让用户在点击仿全选框按钮取消全选的时候，所有的仿复选框的文本内容变为空，仿全选框文本内容也为空，并且让num变为0,给个if语句是为了防止用户点击下面
            // 餐品的仿复选框来取消全选，从而让else语句执行，使所有仿复选框等文本内容变为0，不过经过试验证明，给复选框添加选定状态变化事件来改变全选框
            // 选定状态，这种效果是没有的，因为当我把下面所有餐品的复选框全勾上时，全选框的选定状态确实发生了变化，可是给全选框添加的选定状态变化监听事件的事件处理
            // 程序并没有被执行，它变化是因为我为复选框添加了选定状态变化的监听事件中有这么一段执行代码。
            else{
                if(flag){
                    label[i].innerText = ''
                    checkbox[i].checked = false
                customcheckbox.innerText = ''
                }
                continue;
            }
        }
            }
        }
            }
        })
    // 利用for循环和变量num来对所有复选框绑定选中状态改变事件，每当复选框的状态改变时，根据复选框是否被选中而选择让label标签的文本内容为勾，每次复选框的按钮
    // 被选中都让num加1，反之则减1，根据num变量的值是否等于复选框全部数量来对全选框的状态进行改变，并且num变量的值永远不会大于复选框的数量，而在num等于所有
    // 复选框的数量时，把flag的值设为true，防止用户点击取消仿全选框来取消全选而导致上面的else语句因为flag值为false而不执行。
    // 利用两个初始赋值为0的变量来对用户勾选的餐品的总数量和总价格进行统计，而总价格则有些特殊，因为不是和数量一样是整数，而且这个指定餐品的数量可能不止一个，所以不能直接使用这个餐品的单价price自定义属性，
    // 所以利用Number属性和substring属性对指定餐品的总价格价格其进行取值，然后再通过运算在原先所有餐品的总价格的基础上再累加这个指定餐品的总价格。
    for(i = 0;i < checkbox.length;i++){
        // 利用for循环给每个复选框添加一个自定义属性index，属性值为按从小到大的顺序0到7，以方便后续选中这个复选框。
        checkbox[i].setAttribute('index',i)
        checkbox[i].addEventListener('change',function(){
            if(this.checked){
                this.nextElementSibling.innerText = '✔'
                // console.log(totalprice.innerText.substring(12,totalprice.length));
                // console.log(price[this.getAttribute('index')].innerText);
                counts = Number(totalcount.innerText.substring(12,totalcount.length)) + parseInt(count[this.getAttribute('index')].innerText)
                prices = Number(totalprice.innerText.substring(12,totalprice.length)) + Number(price[this.getAttribute('index')].innerText.substring(1,price[this.getAttribute('index')].innerText.length))
                // console.log(prices);
                // console.log(counts);
                // 这两个全局变量会在下面取消选中某个复选框时重新赋值为0，以便下次用户再次选中这个复选框时，可以重新计算。
                totalcount.innerText = 'Total Count:' + counts
                totalprice.innerText = 'Total Price:' + prices
                visiblenum = 0
                checkboxtrue = 0
                // 利用for循环和if语句，来对页面中已经显示餐品的数量和已选中复选按钮的数量进行统计，如相等，则选中全选按钮和伪全选按钮，并且在每次执行时把这两个变量重新赋值为0。
                for(i = 0;i < dishcontent.length;i++){
                    if(dishcontent[i].style.visibility == 'visible'){
                        visiblenum++
                        if(checkbox[i].checked == true){
                            checkboxtrue++
                        }
                    }
                }
                if(visiblenum == checkboxtrue){
                    selectall.checked = true
                    customcheckbox.innerText = '✔'
                }
            }
            else{
                this.nextElementSibling.innerText = ''
                customcheckbox.innerText = ''
                selectall.checked = false
                // 这次也是同理，不过这次使用的是两个初始赋值为0的全局变量，在用户取消勾选某个餐品时，下面所有餐品的总数量会减去这个指定餐品的总数量，再赋值给下面的总数量；而总价格会有一点点
                // 小小的不同，因为用户也是不一定只选购了一个这个指定的餐品，所以同样不能用这个指定餐品的单价自定义属性price，则要取这个指定餐品的总价格，办法和上面一样，通过Number属性和substring属性，求出
                // 这个指定餐品的总价格，再用全部已选购餐品的总价格减去这个指定餐品的总价格，最后再赋值给下面显示所有已勾选餐品的总价格，不过为了防止用户勾选之后又取消勾选，再重新勾选上，所以在每一次
                // 对所有餐品的总价格进行赋值之后，会把这两个全局变量的值再重新设置为0，方便下一次执行代码是这两个全局变量的值始终为0。
                subtractcount =  Number(totalcount.innerText.substring(12,totalcount.length)) - parseInt(count[this.getAttribute('index')].innerText)
                subtractprice = Number(totalprice.innerText.substring(12,totalprice.length)) - Number(price[this.getAttribute('index')].innerText.substring(1,price[this.getAttribute('index')].innerText.length))
                console.log(counts);
                totalcount.innerText = 'Total Count:' + subtractcount
                totalprice.innerText = 'Total Price:' + subtractprice
                subtractcount = 0
                counts = 0
                prices = 0
                subtractprice = 0
            }
        })
    }
    // end ---------------------------------------------------------------------------------------------------------------------------------
    for(i = 0;i < btnbox.length;i++){
        // 利用for循环给add空数组和subtract空数组按顺序从0到7依次添加每个add按钮元素和subtract按钮元素，并且同时给每个添加按钮元素和删除按钮元素添加一个自定义属性index和自定义属性值，属性
        // 值为每个按钮元素依次在相对于的数组中的索引号，也就是我给每一个要选择或者用的的元素添加的index属性的属性值，互相相对应的每一对元素的自定义属性index的自定义属性值都是一样的，方便
        // 在使用的时候好选择或者用到。
        add[i] = btnbox[i].querySelector('.add')
        subtract[i] = btnbox[i].querySelector('.subtract')
        add[i].setAttribute('index',i)
        subtract[i].setAttribute('index',i)
    }
    for(j = 0;j < add.length;j++){
        // 获取所有的餐品的li标签中的总数量值元素和总价格值元素，并且按照索引号从小到大由0到7存放在相对应的数组中。
        count[j] = dishcontent[j].querySelector('.count')
        price[j] = dishcontent[j].querySelector('.price')
        // 对price数组中的每个price元素添加一个自定义属性，属性值通过substring属性将每个餐品的单价赋值给这个自定义属性。
        price[j].setAttribute('price',parseFloat(price[j].innerText.substring(1,price[j].innerText.length)))
        // 给ul中每个用来装餐品信息的li标签添加一个自定义属性index，自定义属性值就是由0到7，和其余的某些元素的自定义属性值是一样的。
        dishcontent[j].setAttribute('index',j)
        // 给每个li标签都设置为隐藏。
        dishcontent[j].style.visibility = 'hidden'
        add[j].addEventListener('click',function(){
            if(selectall.checked){
                checkbox[this.getAttribute('index')].checked = true
                checkbox[this.getAttribute('index')].nextElementSibling.innerText = '✔'
                var totalcountnum = totalcount.innerText.substring(12,totalcount.length)
                totalcountnum++
                totalpricenum = Number(price[this.getAttribute('index')].getAttribute('price'))
                // 在点击左侧餐品的添加按钮是，先判断全选框是否选中，如果选中，则每点击一次，让下面所有餐品的总数量++就好了，而所有餐品的总价格则是让下原本点击之前所有餐品的总价格加上
                // 这个用户点击的指定餐品的单价，每点击一次，把这个单价加一次就好了。
                totalcount.innerText = 'Total Count:' + totalcountnum
                totalprice.innerText = 'Total Price:' + (Number(totalprice.innerText.substring(12,totalprice.length)) + totalpricenum)
            }
            else if(checkbox[this.getAttribute('index')].checked){
                // 因为上面已经有了判断全选框是否被选中，如被选中，则代表下面的复选框肯定全部被选中了，但是还有一种情况是全选框没有被选中，可是用户单独选中了下面某些餐品的复选框，所以才有了以下
                // 代码，这行代码是已经判断了全选框是否选中后会执行的用户点击了指定餐品的添加按钮，则会判断在页面中这个指定餐品的复选框是否选中，如选中，则会让显示全部餐品的总数量++，每点击一次就
                // 执行一次，而价格则是让原先点击之前的所有餐品的总价格加上用户点击的这个指定餐品的单价price自定义属性值，再让下面显示全部餐品的总价格显示运算过后的新总价格，同理，每点击一次就执行
                // 一次。
                totalcount.innerText = 'Total Count:' + (parseInt(totalcount.innerText.substring(12,totalcount.length)) + 1)
                // console.log(parseInt(totalcount.innerText.substring(12,totalcount.length)) + 1);
                totalprice.innerText = 'Total Price:' + (Number(totalprice.innerText.substring(12,totalprice.length)) + Number(price[this.getAttribute('index')].getAttribute('price')))
            }
            // 获取用户点击的按钮的自定义属性index属性值。
            var index = this.getAttribute('index')
            // 判断用户点击的按钮所对应的li标签是否被隐藏了，如被隐藏了，则会把其中的count元素的文本内容改为1，也就是数量1，然后再在ul标签中删除这个元素，接着利用一个初始赋值为0的全局变量
            // 来让用户点击的这个按钮所对应的指定餐品的li标签在ul中从上往下排列（因为每一次更换位置后，addnum会++，所以用户的每一次点击，都会让所要显示的li标签显示在已显示的最后一个li标签的后面），
            // 最后再把这个li标签从隐藏设置为显示。
                if(dishcontent[index].style.visibility == 'hidden'){
                    count[index].innerText = 1
                shoppingcartlist.removeChild(dishcontent[index])
                shoppingcartlist.insertBefore(dishcontent[index],shoppingcartlist.children[addnum])
                addnum++
                dishcontent[index].style.visibility = 'visible'
                // 利用一个全局变量来对已经显示的餐品li标签进行追踪统计，每次显示++。
                // if(dishcontent[index].style.visibility == 'visible'){
                //     checkboxnum++
                //     console.log('加后' + checkboxnum);
                // }
            }
            // 如果用户点击的按钮所对应的餐品已经显示出来了，则代表只需更改其中的指定餐品的总数量值和总价格值，每次点击总数量值++，总价格值则为总数量值乘以这个指定餐品的单价自定义属性price属性值。
            else{
                count[index].innerText = parseInt(count[index].innerText) + 1
                 price[index].innerText = '$' + price[index].getAttribute('price') * parseInt(count[index].innerText)
            }
        })
        subtract[j].addEventListener('click',function(){
            // 如果用户点击了某个指定餐品的删除按钮，则先判断全选框是否选中，如果选中，则再判断这个指定餐品的总数量是否为0（因为如果不加这个判断条件，则会出现有部分餐品的指定数量值出现负数的
            // 情况，从而影响全局。），如果不为0，则会让下面全部餐品的总数量值，每点击一次--，而下面全部餐品的总价格则会让点击之前的全部餐品的总价格减去这个指定餐品的单价自定义属性price属性值，因为是点击一次
            // 数量只-1，所以每次点击只-一次这个指定餐品的单价就好。
            if(selectall.checked){
                if(count[this.getAttribute('index')].innerText != 0){
                    var totalcountnum = totalcount.innerText.substring(12,totalcount.length)
                console.log(totalcountnum);
                totalcountnum--
                totalcount.innerText = 'Total Count:' + totalcountnum
                totalprice.innerText = 'Total Price:' + (Number(totalprice.innerText.substring(12,totalprice.length)) - Number(price[this.getAttribute('index')].getAttribute('price')))
                }
            }
            // 如果说全选框没有被选中，切这个用户点击的这个按钮所指向的指定li标签里的指定复选框被选中了的话，则每次点击，都会让下面全部餐品的食量-1，而全部餐品的总价格则会显示为原先显示的全部餐品的总价格减去用户所点击的
            // 按钮所指定的餐品的单价自定义属性price属性值，每点击一次-1次。
            else if(checkbox[this.getAttribute('index')].checked){
                totalcount.innerText = 'Total Count:' + (parseInt(totalcount.innerText.substring(12,totalcount.length)) - 1)
                totalprice.innerText = 'Total Price:' + (Number(totalprice.innerText.substring(12,totalprice.length)) - Number(price[this.getAttribute('index')].getAttribute('price')))
                console.log(parseInt(totalcount.innerText.substring(12,totalcount.length)) - 1);
            }
            var index = this.getAttribute('index')
            // 判断用户点击某个餐品的删除按钮所对应的li标签是否隐藏起来了，如果没有被隐藏起来，则再判断另一种情况，就是这个用户点击的按钮所对应的指定餐品的总数量值是否为1，如果为1的话
            // 则再判断全选框是否选中，如果全选框没有被选中，则让这个按钮所对应的指定餐品的复选框的选中状态为未选中，这样如果用户没有让全选框选中，则会让用户每一个删除数量至0的餐品的复选框
            // 的选中状态为未选中，之后的代码则是判断用户所点击的按钮所对应的指定餐品的li标签是否隐藏，如未隐藏且这个指定餐品的全部数量已经为1，则先让addnum--，因为接下来的操作会先删除这个li标签，然后
            // 然后再把这个li标签安插在ul标签中addnum+1的位置，这样设置可以让下一个用户点击某个添加按钮后所对应的显示的指定li标签永远在已经显示的最后一个li标签的后面，简单来说就是按照显示
            // 顺序排列，最后再让这个li标签隐藏起来。
            if(dishcontent[index].style.visibility == 'visible'){
                if(parseInt(count[index].innerText) == 1){
                    if(selectall.checked != true){
                        checkbox[index].checked = false
                    }
                    else{
                        checkbox[index].checked = false
                    }
                    addnum--
                    count[index].innerText = 0
                    shoppingcartlist.removeChild(dishcontent[index])
                    shoppingcartlist.insertBefore(dishcontent[index],shoppingcartlist.children[addnum + 1])
                    dishcontent[index].style.visibility = 'hidden'
                    // 利用一个全局变量来对已经显示的餐品li标签进行追踪统计，每次隐藏--。
                    if(dishcontent[index].style.visibility == 'hidden'){
                    visiblenum = 0
                    checkboxtrue = 0
                    // 利用for循环和if语句，来对页面中已经显示餐品的数量和已选中复选按钮的数量进行统计，如相等，则选中全选按钮和伪全选按钮，并且在每次执行时把这两个变量重新赋值为0。
                    for(i = 0;i < dishcontent.length;i++){
                        if(dishcontent[i].style.visibility == 'visible'){
                            visiblenum++
                            console.log('这是已经显示的li标签个数' + visiblenum);
                            if(checkbox[i].checked == true){
                                checkboxtrue++
                                console.log('这是已经选中的复选框个数' + checkboxtrue);
                            }
                        }
                    }
                    console.log(checkboxtrue);
                    // 添加这个三元运算符是为了防止用户只选购了一件指定餐品，然后通过点击删除按钮直至把这个指定餐品从购物车列表中删除而执行选中全选框的代码，这个三元
                    // 运算符代表着想要执行以下代码，既要满足这两个变量是相等的，又要满足其中一个变量一定大于0，也就是起码是1或者1以上，而另外一个变量更这个接受判断的变量
                    // 是相等的，所以如果第一个条件满足，那第二个条件只需要考虑其中一个变量是否大于0就好了，所以这个三元运算符很好的解决了这个可能会发生的点击情况。
                    if(checkboxtrue == visiblenum && checkboxtrue > 0){
                        selectall.checked = true
                        customcheckbox.innerText = '✔'
                    }
                }
                }
                else{
                    // 如果用户点击的这个按钮所对应的指定的li标签为显示状态且这个指定餐品的总数量不为1，也就是大于1，因为上面已经设置了不会让每一个li标签的总数量不会低于0，也就是不会为
                    // 负数，则让这个按钮所对应的指定餐品的总数量每次点击--就好了，而这个指定餐品的总价格则让原先这个指定餐品的总价格每次点击-去这个指定餐品的单价自定义属性price属性值。
                    count[index].innerText = parseInt(count[index].innerText) - 1
                price[index].innerText = '$' + (parseFloat(price[index].innerText.substring(1,price[index].innerText.length)) - price[index].getAttribute('price'))
                }
            }
            else{
            }
        })
    }
    for(o = 0;o < 1;o++){
            this.alert('Please move your mouse to the left menu button to select the dish you want.')
         }
        //  右侧轮播图 start
        // 以下代码是随意编写的轮播图效果代码，这部分代码只是为了完成轮播效果，而且因为这个轮播图效果处在右侧旁白盒子里面，只是起一个点缀网页的效果，所以在这里写的代码
        // 较为潦草。
        console.log(imgbox.offsetLeft);
        var num = 0
        var img = []
        var imgwidth = imgbox.offsetWidth/carouselimg.length
        for(j = 0;j < carouselimg.length;j++){
            img[j] = carouselimg[j].querySelector('img')
        }
        console.log(img);
        img[0].style.opacity = 1
        setInterval(function(){
                imgbox.style.left =  num * -imgwidth + 'px'
                for(m = 0;m < img.length;m++){
                    img[m].style.opacity = 0
                }
                img[num].style.opacity = 1
                num++
            if(num == carouselimg.length){
                num = 0
            }
        },8000)
})
    