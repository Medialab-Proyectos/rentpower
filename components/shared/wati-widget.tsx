"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

export function WatiWidget() {
  const pathname = usePathname();
  // Validar si la URL actual es o contiene labpower
  const isLabPower = pathname === '/labpower' || pathname?.includes('/labpower');

  if (isLabPower) {
    return (
      <Script
        id="wati-widget-labpower"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?39862';
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = url;
            var options = {
              "enabled":true,
              "chatButtonSetting":{
                "backgroundColor":"#00e785",
                "ctaText":"¡Habla con MacPower!",
                "borderRadius":"25",
                "marginLeft": "0",
                "marginRight": "20",
                "marginBottom": "20",
                "ctaIconWATI":false,
                "position":"right"
              },
              "brandSetting":{
                "brandName":"MacPower IT Solutions ",
                "brandSubTitle":"undefined",
                "brandImg":"https://drive.google.com/uc?export=view&id=18mFIfv98-5igskL_5EYY20cjjm1jMc_A",
                "welcomeText":"¡Bienvenido a MacPower, contáctanos!",
                "messageText":"Hola!, vengo desde la web y me gustaría recibir más información!%0A{{page_link}}",
                "backgroundColor":"#00e785",
                "ctaText":"¡Habla con MacPower!",
                "borderRadius":"25",
                "autoShow":true,
                "phoneNumber":"573115890227"
              }
            };
            s.onload = function() {
              CreateWhatsappChatWidget(options);
            };
            var x = document.getElementsByTagName('script')[0];
            x?.parentNode?.insertBefore(s, x);
          `,
        }}
      />
    );
  }

  // Widget para el resto de la web
  return (
    <Script
      id="wati-widget-general"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?33842';
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = url;
          var options = {
            "enabled":true,
            "chatButtonSetting":{
              "backgroundColor":"#00e785",
              "ctaText":"¡Habla con MacPower!",
              "borderRadius":"25",
              "marginLeft": "0",
              "marginRight": "20",
              "marginBottom": "20",
              "ctaIconWATI":false,
              "position":"right"
            },
            "brandSetting":{
              "brandName":"MacPower IT Solutions ",
              "brandSubTitle":"undefined",
              "brandImg":"https://drive.google.com/uc?export=view&id=17bir3W0iFOJTlSxTH3sYe5Hl3gkeN-0Z",
              "welcomeText":"¡Bienvenido a MacPower, contáctanos!",
              "messageText":"Hola, vengo desde la web y me gustaría recibir más información!%0A{{page_link}}",
              "backgroundColor":"#00e785",
              "ctaText":"¡Habla con MacPower!",
              "borderRadius":"25",
              "autoShow":false,
              "phoneNumber":"573104139279"
            }
          };
          s.onload = function() {
            CreateWhatsappChatWidget(options);
          };
          var x = document.getElementsByTagName('script')[0];
          x?.parentNode?.insertBefore(s, x);
        `,
      }}
    />
  );
}
