<?php
/**
* Template Name: privacy-policy
*/
get_header(); ?>

<main>
  <section class="p-privacy-policy">
    <div class="p-privacy-policy__mv c-lower-mv fade-in">
      <figure class="p-case__mv-wrapper c-lower-mv__image-wrapper">
        <picture class="p-case-mv__image c-lower-mv__image">
          <source srcset="<?php echo get_theme_file_uri( '/assets/images/privacy-policy/privacy-policy-mv.jpg' ); ?>"
            media="(min-width: 768px)" />
          <img src="<?php echo get_theme_file_uri( '/assets/images/privacy-policy/sp-privacy-policy-mv.jpg' ); ?>"
            alt="アドネス株式会社プライバシーポリシーメインビュー" />
        </picture>
      </figure>
      <h1 class="c-lower-mv__title">プライバシーポリシー<br /><span class="c-lower-mv__subtitle">privacy policy</span></h1>
    </div>
    <div class="p-privacy-policy__container l-inner">
      <div class="c-breadcrumb">
        <?php
          if ( function_exists( 'bcn_display' ) ) { 
            bcn_display();
            }
        ?>
      </div>
      <section class="p-privacy-policy__content">
        <ul class="p-privacy-policy__items">
          <li class="p-privacy-policy__item">
            <h2 class="p-privacy-policy__title">1．個人情報の定義</h2>
            <p class="p-privacy-policy__description">
              このプライバシーポリシーにおいて、「個人情報」とは、生存する個人に関する情報であって、以下のいずれかに該当するものをいいます。<br />（１）当該情報に含まれる氏名、生年月日その他の記述等により、特定の個人を識別できるもの（他の情報と容易に照合でき、それにより特定の個人を識別できるものを含む）。<br />（２）個人識別符号が含まれるもの。
            </p>
          </li>
          <li class="p-privacy-policy__item">
            <h2 class="p-privacy-policy__title">2．個人情報の取得</h2>
            <p class="p-privacy-policy__description"> （１）当社は、以下の方法で個人情報を取得します。 申込者から直接個人情報の提供を受ける方法
              申込者が当社サービスを利用する際に自動的に個人情報を記録する方法<br />第三者から間接的に申込者の個人情報の提供を受ける方法<br />（２）当社は、インフォマティブ情報（識別子情報やインターネットの利用にかかるログ情報など、個人に関する情報のことで、個人を特定することができないもの。例として、年齢・性別・職業・居住地域、Cookie、IPアドレス、広告識別子及び位置情報等）を取得しています。申込者が当社サービスの利用にあたり当社に個人情報を提供した場合、当社は、当該情報と、当該申込者のインフォマティブ情報を紐付ける場合がありますが、この場合には当該インフォマティブ情報も個人情報として取り扱います。
            </p>
          </li>
          <li class="p-privacy-policy__item">
            <h2 class="p-privacy-policy__title">3．個人情報の利用目的</h2>
            <p class="p-privacy-policy__description">
              当社は、以下の目的で個人情報を利用します。<br />（１）申込者が利用する当社サービス（利用登録手続中の当社サービスを含みます。）の運営及びそれに伴う申込者とのやりとり・情報提供<br />（２）当社サービスの安全な運営に必要な不正対策<br />（３）当社サービスの改善・新規開発<br />（４）申込者に対する各種サービスの提案・情報提供・広告配信<br />（５）当社が編集・発行・運営する各種媒体への掲載<br />（６）上記の各利用目的に必要な各種調査・分析・マーケティング
            </p>
          </li>
          <li class="p-privacy-policy__item">
            <h2 class="p-privacy-policy__title">4．個人情報の管理について</h2>
            <p class="p-privacy-policy__description">
              （１）当社は、「７．個人情報管理責任者」のもと、個人情報の漏洩、滅失またはき損等を防止するために、必要かつ適切な組織的、人的、物理的、技術的安全管理措置を講じます。<br />（２）当社は、個人情報取扱業務の全部または一部を第三者に委託することがあります。この場合、当社は、委託先に対して必要かつ適切な監督を行います。
            </p>
          </li>
          <li class="p-privacy-policy__item">
            <h2 class="p-privacy-policy__title">5．個人情報の第三者提供</h2>
            <p class="p-privacy-policy__description">
              申込者から承諾を得たとき、個人情報保護法その他の法令等に基づく場合、または次のいずれかに該当する場合を除き、個人情報を第三者に提供することはありません。<br />（１）人の生命、身体、または財産の保護のために個人データの第三者提供が必要である場合であって、本人の同意を得ることが困難である場合<br />（２）公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を取ることが困難である場合<br />（３）国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合<br />（４）有料サービス利用や商品注文等に伴うクレジットカード等の決済手続きに際して申込者の銀行口座やクレジットカード等の正当性を金融機関、カード会社等に確認する場合
            </p>
          </li>
          <li class="p-privacy-policy__item">
            <h2 class="p-privacy-policy__title">6．個人情報の開示等の請求</h2>
            <p class="p-privacy-policy__description">
              （１）申込者は、申込者本人が識別される個人情報の開示・訂正、利用停止または消去（以下「個人情報の開示等」といいます。）を求めることができます。<br />２）個人情報の開示等をご希望の方は、①開示等を希望される個人情報、②当該個人情報を提供した時期を明記し、（３）に記載の本人確認書類の写しを添付の上、「７.個人情報に関する問合せ先」までご連絡ください。なお、開示等については、１件当たり手数料として１１００円（消費税込）をいただきますが、振込先については、お問い合わせに返信する形でお知らせします。<br />３）個人情報の開示等の際に必要な本人確認書類は、以下のうちいずれか１つとなります。<br />①&nbsp;パスポート（あるいは外国人登録証）<br />②&nbsp;運転免許証<br />③&nbsp;健康保険証、年金手帳、納税証明書（または非課税証明書）
            </p>
          </li>
          <li class="p-privacy-policy__item">
            <h2 class="p-privacy-policy__title">7．個人情報管理責任者</h2>
            <p class="p-privacy-policy__description">株式会社アドネス<br />代表取締役&nbsp;三上功太</p>
          </li>
          <li class="p-privacy-policy__item">
            <h2 class="p-privacy-policy__title">8．個人情報に関する問合せ先</h2>
            <p class="p-privacy-policy__description">こちらよりお問い合わせください。<br />info@addness.co.jp</p>
          </li>
        </ul>
      </section>
    </div>
    <section class="c-cta">
      <?php get_template_part('template/document-request'); ?><?php get_template_part('template/contact'); ?>
    </section>

    <?php get_footer(); ?>