// 认证绑定 帮助
import React from 'react';
import { Accordion } from 'antd-mobile';

const FaqRechargePage = () => (
  <div className="animated fadeInRight faq-recharge">
    <Accordion>
      <Accordion.Panel header="一、充值是否有上限？" >
        <div className="faq-text-content">
          <p>目前您可通过快捷支付进行充值。若您通过快捷支付方式进行充值， 快捷的限额见下表（具体额度请以实际情况为准）：</p>
          <div className="tabel-wrap">
            <p className="table-tr"><span className="table-td">银行</span><span className="table-td">单笔限额</span><span className="table-td">单日限额</span></p>
            <p className="table-tr"><span className="table-td">中国工商银行</span><span className="table-td">5万/笔</span><span className="table-td">5万/天</span></p>
            <p className="table-tr"><span className="table-td">中国农业银行</span><span className="table-td">5万/笔</span><span className="table-td">40万/天</span></p>
            <p className="table-tr"><span className="table-td">中国建设银行</span><span className="table-td">5万/笔</span><span className="table-td">5万/天</span></p>
            <p className="table-tr"><span className="table-td">中国银行</span><span className="table-td">5万/笔</span><span className="table-td">10万/天</span></p>
            <p className="table-tr"><span className="table-td">光大银行</span><span className="table-td">10万/笔</span><span className="table-td">40万/天</span></p>
            <p className="table-tr"><span className="table-td">兴业银行</span><span className="table-td">5万/笔</span><span className="table-td">5万/天</span></p>
            <p className="table-tr"><span className="table-td">中国民生银行</span><span className="table-td">10万/笔</span><span className="table-td">40万/天</span></p>
            <p className="table-tr"><span className="table-td">平安银行</span><span className="table-td">10万/笔</span><span className="table-td">40万/天</span></p>
            <p className="table-tr"><span className="table-td">浦东发展银行</span><span className="table-td">5万/笔</span><span className="table-td">5万/天</span></p>
            <p className="table-tr"><span className="table-td">交通银行</span><span className="table-td">5万/笔</span><span className="table-td">10万/天</span></p>
            <p className="table-tr"><span className="table-td">广发银行</span><span className="table-td">10万/笔</span><span className="table-td">40万/天</span></p>
            <p className="table-tr"><span className="table-td">中信银行</span><span className="table-td">0.5万/笔</span><span className="table-td">0.5万/天</span></p>
            <p className="table-tr"><span className="table-td">招商银行</span><span className="table-td">5万/笔</span><span className="table-td">5万/天</span></p>
          </div>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="二、领投鸟理财App支持哪些借记卡？" >
        <div className="faq-text-content">
          <p>借记卡快捷银行列表：</p>
          <div className="tabel-wrap">
            <p className="table-tr"> <span className="table-td">序号</span><span className="table-td">银行</span><span className="table-td">银行简码</span></p>
            <p className="table-tr"> <span className="table-td">1</span><span className="table-td">中国工商银行</span><span className="table-td">ICBC</span></p>
            <p className="table-tr"> <span className="table-td">2</span><span className="table-td">中国农业银行</span><span className="table-td">ABC</span></p>
            <p className="table-tr"> <span className="table-td">3</span><span className="table-td">中国建设银行</span><span className="table-td">CCB</span></p>
            <p className="table-tr"> <span className="table-td">4</span><span className="table-td">中国银行</span><span className="table-td">BOC</span></p>
            <p className="table-tr"> <span className="table-td">5</span><span className="table-td">光大银行</span><span className="table-td">CEB</span></p>
            <p className="table-tr"> <span className="table-td">6</span><span className="table-td">兴业银行</span><span className="table-td">CIB</span></p>
            <p className="table-tr"> <span className="table-td">7</span><span className="table-td">中国民生银行</span><span className="table-td">CMBC</span></p>
            <p className="table-tr"> <span className="table-td">8</span><span className="table-td">平安银行</span><span className="table-td">PSBC</span></p>
            <p className="table-tr"> <span className="table-td">9</span><span className="table-td">浦东发展银行</span><span className="table-td">SPDB</span></p>
            <p className="table-tr"> <span className="table-td">10</span><span className="table-td">交通银行</span><span className="table-td">COMM</span></p>
            <p className="table-tr"> <span className="table-td">11</span><span className="table-td">广发银行</span><span className="table-td">GDB</span></p>
            <p className="table-tr"> <span className="table-td">12</span><span className="table-td">中信银行</span><span className="table-td">CITIC</span></p>
            <p className="table-tr"> <span className="table-td">13</span><span className="table-td">招商银行</span><span className="table-td">CMB</span></p>
          </div>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="三、使用信用卡是否可以给账户充值？" >
        <div className="faq-text-content">
          <p>目前领投鸟理财账户不支持信用卡充值。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="四、为什么会充值失败" >
        <div className="faq-text-content">
          <p>目前领投鸟理财账户不支持信用卡充值。</p>
          <p>(1) 首先请确认您的借记卡能否正常使用；</p>
          <p>(2) 请查看您的借记卡的转账功能是否设置最高限制，充值金额是否超出额度；</p>
          <p>(3) 打相关银行的客服电话进行咨询；</p>
          <p>(4) 可致电咨询领投鸟理财客服热线：400-9999-980。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="五、通过借记卡代扣充值的资金具体什么间可到账？" >
        <div className="faq-text-content">
          <p>所有银行：立即到账(充值高峰期，到账时间会延迟，请以实际到账时间为准) ， 最迟当天24点前到账。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="六、充值成功后会有短信通知吗？" >
        <div className="faq-text-content">
          <p>领投鸟支持的第三方支付资金托管平台—联动优势支持充值成功的短信通知提醒业务；若充值的银行卡开通短信通知功能， 会有相关充值记录通知。领投鸟理财暂不提供充值成功的短信通知。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="七、最多能提现多少金额？" >
        <div className="faq-text-content">
          <p >领投鸟理财账户单笔最小提现金额为1元，每日限额100万。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="八、提现多久可以到账？" >
        <div className="faq-text-content">
          <p >领投鸟理财在工作日的10点，14点、16点，17点30定时对用户发起的提现请求进行受理，17点以后提交的提现申请，
            将于第二个工作日10点审核。若遇节假日顺延。 每周一因要审核周五、周六、周日三天的付款申请，因此略有延时。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="九、提现手续费怎么收取？" >
        <div className="faq-text-content">
          <p className="content">每个自然月享受1次提现免费机会，超过后每次扣除2鸟币，鸟币不足扣除2元人民币/次（提现费用由第三方支付平台收取）。每月还可通过累计签到获取一次额外的免费提现机会。</p>
        </div>
      </Accordion.Panel>
    </Accordion>
  </div>
);


export default FaqRechargePage;
