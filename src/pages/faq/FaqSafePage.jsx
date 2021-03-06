// 安全 帮助
import React from 'react';
import { Accordion } from 'antd-mobile';

const SafePage = () => (
  <div className="animated fadeInRight">
    <Accordion>
      <Accordion.Panel header="一、使用领投鸟理财App的平台是否安全？" >
        <div className="faq-text-content">
          <p>领投鸟理财拥有多重风控及安全措施，尽其最大努力保障您使用的服务安全:</p>
          <p>(1) 第一道措施： 资产质量</p>
          <p>优质资产：赎楼业务本身期限短、风险低，天生是做P2P的优良资产。过程控制：公司赎楼业务过程控制经验丰富。
              <br />
            银行审批：银行的贷款预审批通过，项目才会进入审核。</p>
          <p>(2) 第二道措施： 过程透明</p>
          <p>三方托管：所有资金由中国移动与银联成立的第三方平台联动优势全权托管。
            <br />
              流向透明：投资项目真实可查，资金流向透明。</p>
          <p>(3) 第三道措施：技术保障</p>
          <p>同卡进出：提现仅限本人借记卡。
            <br />技术保障：平台采用MD5数据加密技术、防火墙（Firewall）技术、威瑞信（VeriSign）数字签名技术、 多重密码保护技术保证用户数据安全。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="二、我领投鸟理财账户里的资金是否安全？" >
        <div className="faq-text-content">
          <p>领投鸟理财使用联动优势（中国银联和中国移动共同成立）作为第三方支付资金托管平台， 实现真正第三方资金托管与结算。用户资金只存在于第三方支付的托管账户里， 用户资金与平台有效隔离，平台不触碰资金，保证安全。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="三、领投鸟理财是如何保护用户信息及隐私保护？" >
        <div className="faq-text-content">
          <p className="content">本平台对于用户提供的、自行收集到的、
            经认证的个人信息将按照领投鸟理财《在线服务协议》及有关规则予以保护，
            但因技术限制问题， 本平台不能确保用户的个人信息不会通过本协议中未列明的途径泄露出去。</p>
          <p className="content">用户使用本平台服务进行交易时，即授权本平台将用户的包括但不限于真实姓名、联系方式、 信用状况等必要的个人信息和交易信息披露给为向用户提供服务而合作的机构。</p>
        </div>
      </Accordion.Panel>
    </Accordion>
  </div>
);


export default SafePage;
