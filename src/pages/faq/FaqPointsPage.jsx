// 积分帮助文档  FaqPointsPage
import React from 'react';
import { Accordion } from 'antd-mobile';

const FaqPointsPage = () => (
  <div className="animated fadeInRight">
    <Accordion>
      <Accordion.Panel header="一、什么是积分？" >
        <div className="faq-text-content">
          <p>积分是领投鸟平台针对活跃用户不同程度的奖励</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="二、怎么查看我的积分？" >
        <div className="faq-text-content">
          <p>登录后，您可以在App我的账户中查看您的累积积分。（自积分功能上线起开始，之前的行为不计算积分。）</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="三、怎么获得积分？" >
        <div className="faq-text-content">
          <p>领投鸟用户可以通过App、官网和H5 页面进行签到（砸金蛋）获得积分，也可以通过投资等行为获得积分。领投鸟保留对积分的最终解释权。</p>
          <div className="tabel-wrap two">
            <div className="table-tr">
              <div className="table-td">用户获取方式</div>
              <div className="table-td">获得积分数量</div>
            </div>
            <div className="table-tr">
              <div className="table-td">注册</div>
              <div className="table-td">20分</div>
            </div>
            <div className="table-tr">
              <div className="table-td">实名+绑卡</div>
              <div className="table-td">100积分</div>
            </div>
            <div className="table-tr">
              <div className="table-td">签到（砸金蛋）</div>
              <div className="table-td">2分 <br />另：连续砸蛋7天<br />额外赠送10个积分</div>
            </div>
            <div className="table-tr">
              <div className="table-td">首投新手标的积分</div>
              <div className="table-td">5倍积分 <br /> 积分=标的金额*标的期限（天）/5000</div></div>
            <div className="table-tr">
              <div className="table-td">首投非新手标的积分</div>
              <div className="table-td">5倍积分 <br /> 积分=标的金额*标的期限（天）/5000</div></div>
            <div className="table-tr">
              <div className="table-td">投资</div>
              <div className="table-td">积分=标的金额*标的期限（天）/5000</div>
            </div>
          </div>
          <h4>还款后连续复投得积分：</h4>
          <div className="tabel-wrap two">
            <div className="table-tr">
              <div className="table-td">标的到期连续再投资<br />（还款后的次日24点之前）</div>
              <div className="table-td">获得积分</div>
            </div>
            <div className="table-tr">
              <div className="table-td">1次</div>
              <div className="table-td">1.1倍积分</div>
            </div>
            <div className="table-tr">
              <div className="table-td">2-3次</div>
              <div className="table-td">1.2倍积分</div>
            </div>
            <div className="table-tr">
              <div className="table-td">4-6次</div>
              <div className="table-td">1.3倍积分</div>
            </div>
            <div className="table-tr">
              <div className="table-td">7-10次</div>
              <div className="table-td">1.4倍积分</div>
            </div>
            <div className="table-tr">
              <div className="table-td">10次以上</div>
              <div className="table-td">1.5倍积分</div>
            </div>
          </div>
          <p className="tips">备注：标的还款到账后首笔投资获得积分加倍，若当日有多笔到账，则算一次！</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="四、积分怎么使用？" >
        <div className="faq-text-content">
          <p>目前领投鸟用户可以用一定量积分，在App中兑换商品或可参与不定期上线的积分活动、大转盘、抽奖等。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="五、积分是否有有效期？" >
        <div className="faq-text-content">
          <p>有效期为一年。</p>
          <p>(1) 从获得积分之日起，一年后每天相应进行清除；</p>
          <p>(2) 积分为整数：若出现小数点后一位，则按四舍五入规则折合为整数。</p>
        </div>
      </Accordion.Panel>
    </Accordion>
  </div>
);


export default FaqPointsPage;
