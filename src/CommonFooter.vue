<template>
<footer class="footer">
    <div class="footer-inner wrap">
      <small class="footer-copyright">&copy; 2020 TECH inc.</small>
      <nav class="footer-nav">
        <ul class="footer-nav-list">
          <li class="footer-nav-item"><a href="index.html">ホーム</a></li>
          <li class="footer-nav-item"><a href="service.html">事業内容</a></li>
          <li class="footer-nav-item"><a href="news.html">ニュース</a></li>
          <li class="footer-nav-item"><a href="blog.html">社員ブログ</a></li>
          <li class="footer-nav-item"><a href="company.html">会社概要</a></li>
          <li class="footer-nav-item"><a href="recruit.html">採用情報</a></li>
          <li class="footer-nav-item"><a href="contact.html">お問い合わせ</a></li>
        </ul>
      </nav>
    </div>
  </footer>
  </template>

<style scoped>
.footer {
  padding: 20px 0;
  color: #fff;
  background-color: #222;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}

.footer-nav-list {
  display: flex;
  flex-wrap: wrap;
}

.footer-nav-item:after {
  content: "|";
  display: inline-block;
  padding: 0 10px;
}

.footer-nav-item:last-child:after {
  display: none;
}
</style>