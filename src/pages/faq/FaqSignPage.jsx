// 登录注册相关
import React from 'react';
import { Accordion } from 'antd-mobile';

const FaqSafePage = () => (
  <div className="animated fadeInRight">
    <Accordion>
      <Accordion.Panel header="一、注册时获取短信验证码失败怎么办？" >
        <div className="faq-text-content">
          <p>(1) 可能被手机App屏蔽了，请进行相关设置。</p>
          <p>(2) 运营商信息平台不稳定，请稍后再次尝试。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="二、为什么会登录失败？" >
        <div className="faq-text-content">
          <p>请您核对以下几点，这些可能是导致您登录失败的原因：</p>
          <p>(1) 请您确认输入的手机号登录是否正确；</p>
          <p>(2) 请您确认输入的密码是否正确。如果忘记密码，您可以点击右侧【忘记密码】重新设置；</p>
          <p>(3) 请您确认输入的验证码是否正确。如果看不清楚，可以点击【图形验证码】重新获取；</p>
          <p>(4) 网络问题也会造成登录失败，如果提示网络异常，建议您稍后尝试。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="三、我的账户被锁定了怎么办？" >
        <div className="faq-text-content">
          <p>可以拨打客服热线400-9999-980，客服和技术人员将在第一时间为你解决问题。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="四、一个手机号可以注册几个账户？" >
        <div className="faq-text-content">
          <p>一个手机号只能注册一个账户。</p>
        </div>
      </Accordion.Panel>
    </Accordion>
  </div>
  );

export default FaqSafePage;
