// 获取所有的 "Read More" 按钮
const toggleButtons = document.querySelectorAll('.toggle-details');

// 为每个按钮添加点击事件
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling; // 获取相应的详情部分
        // 切换详情部分的显示与隐藏
        if (details.style.display === "block") {
            details.style.display = "none";
            button.textContent = "Read More";  // 恢复按钮文字
        } else {
            details.style.display = "block";
            button.textContent = "Read Less";  // 更改按钮文字
        }
    });
});
