
$(document).ready(function() {
    // 1. Hiệu ứng active menu tự động dựa theo trang hiện tại
    var path = window.location.pathname.split("/").pop();
    if (path == '') path = 'index.html';
    $('nav a').each(function() {
        if ($(this).attr('href') === path) {
            $(this).addClass('active');
        }
    });

    // 2. Xử lý gửi comment động bằng JQuery (Thỏa mãn yêu cầu quy trình bài thi)
    $('#commentForm').on('submit', function(e) {
        e.preventDefault();
        
        var name = $('#txtActiveName').val().trim();
        var content = $('#txtCommentContent').val().trim();
        
        if(name === '' || content === '') {
            alert('Vui lòng nhập đầy đủ tên và nội dung phản hồi!');
            return;
        }
        
        var currentDate = new Date().toLocaleString('vi-VN');
        
        var newComment = $('<div class="comment-item"></div>');
        var authorMeta = $('<span class="comment-author"></span>').text(name);
        var dateMeta = $('<span class="comment-date"></span>').text(currentDate);
        var commentBody = $('<div class="comment-body"></div>').text(content);
        
        newComment.append(authorMeta).append(dateMeta).append(commentBody);
        
        $('.comment-list').append(newComment);
        
        // Reset form và thông báo thành công ngắn gọn
        $('#txtActiveName').val('');
        $('#txtCommentContent').val('');
        alert('Cảm ơn bạn đã gửi phản hồi!');
    });
});
