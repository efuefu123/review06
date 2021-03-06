<?php 
/**
* Template Name: company
*/
get_header(); 
?>
<main>
  <section class="p-company">
    <div class="p-company__mv c-lower-mv fade-in">
      <figure class="p-company__mv-wrapper c-lower-mv__image-wrapper">
        <picture class="p-company-mv__image c-lower-mv__image">
          <source srcset="<?php echo get_theme_file_uri( '/assets/images/company/company-mv.jpg' ); ?>"
            media="(min-width: 768px)" />
          <img src="<?php echo get_theme_file_uri( '/assets/images/company/sp-company-mv.jpg' ); ?>"
            alt="アドネス株式会社会社概要メインビュー" />
        </picture>
      </figure>
      <h1 class="c-lower-mv__title">会社概要<br /><span class="c-lower-mv__subtitle">Company info</span></h1>
    </div>
    <div class="p-company__container">
      <div class="c-breadcrumb c-breadcrumb--company">
        <?php
          if ( function_exists( 'bcn_display' ) ) { 
            bcn_display();
            }
        ?>
      </div>
      <section class="p-company__content l-inner">
        <div class="p-company__content-01 fade-up">
          <div class="p-company__content-01-container">
            <section class="p-company-mission p-company__mission">
              <h2 class="p-company-mission__title-ja c-util-company-title-ja">ミッション</h2>
              <p class="p-company-mission__title-en c-util-company-title-en">Mission Statement</p>
              <h3 class="p-company-mission__lead">世界を巻き込むWell-Beingの実現</h3>
              <p class="p-company-mission__text">私たち全員が<br class="u-hidden-tab" />Well-Beingを誰よりも追求することで、<br
                  class="u-apper-tab" />世界を巻き込むWell-Beingを実現します。</p>
            </section>
            <section class="p-company-vision p-company__vision">
              <h2 class="p-company-vision-ja c-util-company-title-ja">ビジョン</h2>
              <p class="p-company-vision-en c-util-company-title-en">Vision</p>
              <h3 class="p-company-vision__lead">世界のWell-Beingの<br class="u-hidden-tab" />中心となる企業になる</h3>
              <p class="p-company-vision__text"> 私たちはアドネスが世界で最もWell-Beingし、<br
                  class="u-apper-tab" />世界で最もWell-Beingさせる企業であることを思い描き、今を生きていきます。 </p>
            </section>
            <section class="p-company-value p-company__value">
              <h2 class="p-company-value-ja c-util-company-title-ja">バリュー</h2>
              <p class="p-company-value-en c-util-company-title-en">Value</p>
              <div class="p-company-value">
                <ul class="p-company-value__list">
                  <li class="p-company-value__item">
                    <div class="p-company-value__item-head">基準値を常に上げ続ける </div>
                    <div class="p-company-value__item-body">
                      <p class="p-company-value__item-text">
                        「楽(ラク)」な人生の先には薄いポジティブな感情しか存在しない空虚な人生が待っています。私たちは「楽(ラク)」と決別し、「楽しさ」もといWell-Beingを追求する為に、基準値を常に上げ続けます。そして、私たちが基準値を上げる速度こそが私たちの求心力になります。人より遅い歩みでは、人の手を引くことはできません。私たちは誰よりも高い基準値を持とうと努め続けることで、Well-Beingの導き手となり、世界を巻き込んでいかなければなりません。<br
                          class="u-br">※楽(ラク)＝ポジティブな感情の保全の為に、well-being理論(後述)のポジティブ感情以外の要素を犠牲にする行動
                        楽しい＝well-being理論の5要素を追求すること </p>
                    </div>
                  </li>
                  <li class="p-company-value__item">
                    <div class="p-company-value__item-head">圧倒的な当事者意識を持つ</div>
                    <div class="p-company-value__item-body">
                      <p class="p-company-value__item-text">
                        私たちは世の人々を巻き込んでいく人間として、圧倒的な当事者意識を持たなければなりません。そもそも私たちは皆、一人残らず全員が「自分の人生」を生きています。その中で精力的にWell-Beingに向かうものと向かうことのできないものがあります。この違いのうち最も大きなものの一つが「当事者意識の有無」です。あなたにはあなたの天分があり、私には私の天分があります。この天分を自覚し、自分の人生に圧倒的な当事者意識を持って初めて、真に自分の人生を歩み始めることができます。その上で初めて、私たちは私たち自身、そして世界を巻き込むWell-Beingの方向を向くことができるのです。自らの足で、自らの意志で、私たちと共に世界を巻き込みましょう。
                      </p>
                    </div>
                  </li>
                  <li class="p-company-value__item">
                    <div class="p-company-value__item-head">正しい利益にコミットする</div>
                    <div class="p-company-value__item-body">
                      <p class="p-company-value__item-text">
                        この世は資本主義社会であること、これは動かしようのない事実です。資本主義は正しく使うことで私たちの人生をより豊かなものにしてくれます。資本主義社会とは、資本を価値の媒介として使用することで人間の社会活動を円滑に進めていく社会です。その中で私たちは価値を提供し、対価として資本を受け取り、資本を使い価値を受け取ります。その中で時たま見られる無償の価値提供は、善行でもなければ、美しくもない、ただの妥協と言わざるを得ません。資本を受け取らないのは、資本を受け取れない程度の価値提供しか行えていないことの証明に他ならないからであります。この前提に則れば、資本主義社会においては、私たちが挙げた総利益こそが、私たちが社会に提供した価値の総量であり、私たちの存在意義であると言えます。この時、前提条件として最も重要なのが「正しい」利益にコミットするということです。ここでいう「正しい」とは、もらった対価に見合うだけの価値をしっかりと提供している、ということです。一方のどちらかが損をするような取引で利益を生み出してはなりません。しかし、私たちは利益にコミットしなければなりません。利益にコミットした上で、それを「正しい」利益に確実にしなければなりません。その覚悟を持って全身全霊で価値提供を行うこと。即ち、正しい利益を生み出す活動にコミットしてこそ、私たちの存在意義が最大化し、より大きなWell-Beingの渦を作ることができます。以上を胸に、一挙手一投足で正しい利益にコミットしなさい。
                      </p>
                    </div>
                  </li>
                  <li class="p-company-value__item">
                    <div class="p-company-value__item-head">ネクストアクションの最速遵守</div>
                    <div class="p-company-value__item-body">
                      <p class="p-company-value__item-text">
                        直接的に現実を変える力を持つものは、この世に唯一「行動」のみである。その他全てのものは、現実を変える「行動」に影響をもたらすに過ぎない。それがわかったら今すぐ「次の」「行動」を決めなさい。そしてその「行動」を実行しなさい。この繰り返しがこれからの現実を作ります。動かない人間は何も起こすことができません。私たちが世界を巻き込む為には世界よりも速く動かなければなりません。私たちが歩みを止めては、Well-Beingの渦は弱まってしまうからです。私たち自身を、そして世界をWell-Beingさせる為にも「ゴールから逆算した」ネクストアクションを「最速で」遵守しなさい。
                      </p>
                    </div>
                  </li>
                  <li class="p-company-value__item">
                    <div class="p-company-value__item-head">本音ファーストで生きる</div>
                    <div class="p-company-value__item-body">
                      <p class="p-company-value__item-text">
                        私たちは人生レベルで関わり合っていきます。人間関係を最も輝かせるのは「期間の長さ」です。人生レベルの関係を形成する上で「表面的に取り繕うこと」ほど無駄なことはありません。中短期的な関わりであればそれもいいかもしれません。しかし、私たちは人生レベルでのWell-Beingを作ります。だからこそ、私たちは本音で関わり合います。「上辺で好き」より「本音で嫌い」の方が人生レベルで見た時、遥かに尊い行動です。本音で語られない限り歪みは大きくなり、いつか破綻をもたらします。しかし本音で語り合うことができれば、お互いにそれを理解し、尊重することができます。その上で日に新たに試行改善を繰り返し、いつか私たち、そして私たちと関わる全ての人間が「本音で」「最高にWell-Beingだ」と言える世界を実現する為の第一歩として、私たちは今を本音で生きていきます。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div class="p-company__content-02 fade-up">
          <section class="p-company-greetings">
            <h2 class="p-company-greetings-ja c-util-company-title-ja">代表挨拶</h2>
            <p class="p-company-greetings-en c-util-company-title-en">Greetings</p>
            <!-- <figure class="p-company-greetings__image-wrapper">
              <img class="p-company-greetings__image u-appear-tab"
                src="<?php echo get_theme_file_uri( '/assets/images/company/company-daihyo.jpg' ); ?>"
                alt="アドネス株式会社代表" />
              <img class="p-company-greetings__image u-hidden-tab"
                src="<?php echo get_theme_file_uri( '/assets/images/company/sp-company-daihyo.jpg' ); ?>"
                alt="アドネス株式会社代表" />
            </figure> -->
            <p class="p-company-greetings__text">
              平素より御高配を賜り、誠にありがとうございます。
            </p>
            <p class="p-company-greetings__text">
              アドネスは2021年7月に創業以来、「世界を巻き込むWell-beingの実現」という理念の元、進化の早いSNS関連産業の中で、アドネス5つの行動指針に寄り添うことで培われた、「巻き込む力」を武器に社員一丸となって事業拡大を続けてきました。
            </p>
            <p class="p-company-greetings__text">
              創業以来、弊社の主力事業となっている、toCのSNSマーケティング教育事業「センサーズ」は立ち上げ2ヶ月で累計売上1億円を突破。立ち上げ半年後の2022年2月には累計売上2億円を突破するなど、業界でも他に類を見ない速度で成長を続けております。
            </p>
            <p class="p-company-greetings__text">
              今後も、教育に関する哲学を追求し、卓越したマーケティングスキルをもとに、「世界を巻き込むWell-beingの実現」に向けて、邁進してまいります。
            </p>
            <p class="p-company-greetings__text">代表取締役<br />三上
              功太
            </p>
          </section>
        </div>
        <div class="p-company__content-03 fade-up">
          <div class="p-company__content-03-container">
            <section class="p-company-info">
              <h2 class="p-company-info-ja c-util-company-title-ja">会社概要</h2>
              <p class="p-company-info-en c-util-company-title-en">Company info</p>
              <!-- <figure class="p-company-info__image-wrapper">
                <img class="p-company-info__image"
                  src="<?php echo get_theme_file_uri( '/assets/images/company/company-logo.svg' ); ?>"
                  alt="アドネス株式会社ロゴ" />
              </figure> -->
              <div class="p-company-info__list">
                <div class="p-company-info__item">
                  <h3 class="p-company-info__item-name">社名</h3>
                  <p class="p-company-info__item-description">アドネス株式会社</p>
                </div>
                <div class="p-company-info__item">
                  <h3 class="p-company-info__item-name">本社所在地</h3>
                  <p class="p-company-info__item-description">〒162-0067<br />東京都新宿区富久町8-25 5F<br />TEL：050-1541-0722</p>
                </div>
                <div class="p-company-info__item">
                  <h3 class="p-company-info__item-name">代表者</h3>
                  <p class="p-company-info__item-description">代表取締役　三上 功太</p>
                </div>
                <div class="p-company-info__item">
                  <h3 class="p-company-info__item-name">設立</h3>
                  <p class="p-company-info__item-description">2021年7月26日</p>
                </div>
                <div class="p-company-info__item">
                  <h3 class="p-company-info__item-name">資本金</h3>
                  <p class="p-company-info__item-description">100万円（2022年2月末現在）</p>
                </div>
                <div class="p-company-info__item">
                  <h3 class="p-company-info__item-name">URL</h3>
                  <p class="p-company-info__item-description">snsers.com</p>
                </div>
                <div class="p-company-info__item">
                  <h3 class="p-company-info__item-name">事業内容</h3>
                  <p class="p-company-info__item-description">
                    SNSマーケティング特化オンラインスクール「SNSERS」の運営<br />webマーケティング業務のコンサルティング<br />各種SNS運営代行、コンサルティング業務 </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="p-company__content-04 fade-up">
          <div class="p-company-access">
            <h2 class="p-company-access-ja c-util-company-title-ja">アクセス</h2>
            <p class="p-company-access-en c-util-company-title-en">Access</p>
            <p class="p-company-access__text">〒162-0067<br />東京都新宿区富久町8-25 5F</p>
            <div class="p-company-access__map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4186579130314!2d139.71595271525905!3d35.69131388019195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ceee91db93d%3A0x675026d3419b2fe2!2z44CSMTYyLTAwNjcg5p2x5Lqs6YO95paw5a6_5Yy65a-M5LmF55S677yY4oiS77yS77yV!5e0!3m2!1sja!2sjp!4v1645292277680!5m2!1sja!2sjp"
                width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="c-cta">
      <?php get_template_part('template/document-request'); ?><?php get_template_part('template/contact'); ?>
    </section>


    <?php get_footer(); ?>