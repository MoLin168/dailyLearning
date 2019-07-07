$(function(){
    let template = '<div><p></p></div>',
        classTem = '<div class="prepend"><p></p></div>',
        spanDom = '<span class="prepend-span"></span>',
        num = 3;
    for(let i = 0;i < num;i++){
        $('.header').append(template);
    }

    //在固定元素内部内部前置内容（插入到内部元素第一个位置） ----prepend
    $('.header').prepend(classTem);
    
    //在固定元素内部插入dom ----append
    $('.prepend').append(spanDom);

    //在固定元素后面插入dom ----after
    // $('.header').find('div').eq(1).after('<section><p>after</p></section>');
    $(`.header div :eq(1)`).after('<section><p>after</p></section>');
    $(`.header`).after('<div class="footer"></div>');

    //在固定元素之前插入dom
    // $('.header').find('div').eq(3).before('<section><p>before</p></section>');
    $(`.header div :eq(${num})`).before('<section><p>before <a href="javescript:;">test0</a></p><a href="javescript:;">test1</a><br><a href="javescript:;">test2</a></section>');

    //删除固定元素后面所有后代元素dom ----remove 
    $(`.prepend p`).remove();//p元素被删除了
    // $('.prepend').remove();

    //detach() 删除节点，但是和remove()不同的是，可以保留之前的事件和附加的数据

    //empty() 清空节点

    //验证选择器中的 > 是匹配指定元素下面的一级元素，而不是所有子级元素
    $(`section > a`).click(function(){
        console.log(1);
    });
    //siblings
    let siblingsDom = $(`section`).siblings();
    console.log(`length=${siblingsDom.length}`);
});