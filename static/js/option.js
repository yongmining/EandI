function 주문하기() {
    // 여기에 주문을 처리하는 JavaScript 코드를 추가하세요
    alert("주문이 완료되었습니다!");
}

// 옵션 버튼 클릭 시 옵션 창 표시/숨김 토글
document.getElementById("옵션버튼").addEventListener("click", function () {
    var 옵션창 = document.getElementById("옵션창");
    if (옵션창.classList.contains("hidden")) {
        옵션창.classList.remove("hidden");
    } else {
        옵션창.classList.add("hidden");
    }
});
