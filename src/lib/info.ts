import { type Locale } from "@/lib/i18n";

export type InfoSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type InfoDocuments = {
  about: {
    title: string;
    intro: string;
    sections: InfoSection[];
  };
  contact: {
    title: string;
    intro: string;
    emailLabel: string;
    email: string;
    responseNote: string;
    inquiryTitle: string;
    inquiryTypes: string[];
  };
  faq: {
    title: string;
    intro: string;
    items: FaqItem[];
  };
};

export const infoDocuments: Record<Locale, InfoDocuments> = {
  ko: {
    about: {
      title: "AlloraTools 소개",
      intro:
        "AlloraTools는 브라우저에서 바로 문서·파일 작업을 처리할 수 있도록 만든 웹 기반 유틸리티 서비스입니다. 가입 없이도 바로 시작할 수 있지만, 계정을 사용하면 더 안정적이고 연속적인 사용 경험을 제공합니다.",
      sections: [
        {
          title: "AlloraTools가 하는 일",
          paragraphs: [
            "AlloraTools는 파일/문서 작업에서 자주 발생하는 반복 작업을 웹에서 간단히 처리할 수 있도록 설계되었습니다.",
            "소프트웨어 설치나 복잡한 설정 없이, 필요한 작업을 빠르게 끝낼 수 있는 실용적인 도구 경험을 지향합니다.",
            "서비스 성격은 대규모 플랫폼보다는 현실적인 문제 해결에 집중한 개인 운영형 웹 유틸리티입니다.",
          ],
        },
        {
          title: "현재 핵심 기능: PDF to JPG",
          paragraphs: [
            "현재 메인 기능은 PDF 파일의 각 페이지를 JPG 이미지로 변환하는 기능입니다.",
            "문서 내용을 이미지로 공유하거나, 페이지 단위로 다뤄야 하는 작업을 더 쉽게 처리할 수 있도록 구성했습니다.",
            "작업 흐름은 가능한 한 짧고 명확하게 유지해 처음 사용하는 사용자도 부담 없이 사용할 수 있게 했습니다.",
          ],
        },
        {
          title: "누구를 위한 서비스인지",
          paragraphs: [
            "학생, 사무직, 프리랜서, 소규모 팀처럼 문서 변환이 자주 필요한 사용자를 주요 대상으로 생각하고 있습니다.",
            "특정 직군에 한정하기보다, 빠르게 결과가 필요한 일반 사용자까지 폭넓게 사용할 수 있도록 접근성을 우선합니다.",
            "다국어 지원을 통해 언어 장벽을 낮추고, 어디서든 동일한 사용 흐름을 제공하는 것을 목표로 합니다.",
          ],
        },
        {
          title: "제품 원칙과 계정 모델",
          paragraphs: [
            "AlloraTools는 단순함, 접근성, 사용성, 신뢰 가능한 기본 경험을 제품의 핵심 원칙으로 삼고 있습니다.",
            "게스트 사용을 허용하는 이유는 누구나 즉시 기능을 시험하고 필요한 작업을 바로 처리할 수 있게 하기 위해서입니다.",
            "동시에 로그인 및 이메일 인증 사용자는 더 높은 무료 사용 한도를 제공해 반복 사용 시에도 끊김이 적은 경험을 받을 수 있습니다.",
          ],
        },
        {
          title: "운영 정보와 향후 방향",
          paragraphs: [
            "AlloraTools는 PLANB-John이 개인 형태로 운영하는 서비스이며, 운영 도메인은 https://www.alloratools.com 입니다.",
            "서비스는 실제 사용 과정에서 확인되는 필요를 바탕으로 점진적으로 개선·확장되고 있습니다.",
            "장기적으로는 PDF 변환을 시작점으로, 문서·파일 작업 전반을 지원하는 멀티 툴 플랫폼으로 발전시키는 것을 목표로 합니다.",
          ],
        },
      ],
    },
    contact: {
      title: "문의하기",
      intro: "서비스 이용 중 문제가 있거나 제안이 있다면 아래 이메일로 문의해 주세요.",
      emailLabel: "문의 이메일",
      email: "planb.init@gmail.com",
      responseNote: "문의 내용과 상황에 따라 답변 시간은 달라질 수 있습니다.",
      inquiryTitle: "다음과 같은 문의를 받을 수 있습니다",
      inquiryTypes: ["버그 제보", "서비스 장애/오류", "일반 문의", "기능 제안 및 개선 아이디어"],
    },
    faq: {
      title: "자주 묻는 질문",
      intro: "AlloraTools 사용 전에 가장 많이 확인하는 내용을 간단히 정리했습니다.",
      items: [
        { question: "AlloraTools는 어떤 서비스인가요?", answer: "AlloraTools는 문서·파일 작업을 브라우저에서 처리할 수 있는 웹 기반 유틸리티 서비스입니다. 현재 핵심 기능은 PDF를 JPG 이미지로 바꾸는 변환 도구입니다." },
        { question: "PDF to JPG 변환은 실제로 어떤 작업인가요?", answer: "하나의 PDF 문서에 있는 각 페이지를 JPG 이미지 파일로 변환하는 작업입니다. 문서를 이미지로 공유하거나 페이지 단위로 따로 활용할 때 유용합니다." },
        { question: "회원가입 없이도 사용할 수 있나요?", answer: "네. 게스트로 바로 사용할 수 있으며, 첫 사용을 위해 계정을 꼭 만들 필요는 없습니다." },
        { question: "게스트 사용이 가능한데 계정은 왜 필요한가요?", answer: "계정은 반복 사용 시 더 안정적으로 이용량을 관리하고, 이메일 인증 사용자에게 더 높은 무료 한도를 제공하기 위해 운영됩니다." },
        { question: "게스트와 로그인/이메일 인증 사용자의 차이는 무엇인가요?", answer: "게스트는 하루 5회, 로그인 후 이메일 인증까지 완료한 사용자는 하루 10회까지 무료 변환을 사용할 수 있습니다." },
        { question: "일일 사용 한도는 어떻게 적용되나요?", answer: "하루 기준으로 무료 사용 횟수가 정해지며, 해당 한도를 모두 사용하면 다음 날 다시 이용할 수 있습니다. 현재 기준은 게스트 5회, 인증 사용자 10회입니다." },
        { question: "변환이 실패해도 사용 횟수가 차감되나요?", answer: "아니요. 사용 횟수는 변환이 정상적으로 완료된 경우에만 차감됩니다." },
        { question: "여러 페이지가 있는 PDF도 변환할 수 있나요?", answer: "네. 다중 페이지 PDF를 지원합니다. 다만 무료 플랜에서는 한 번에 처리 가능한 페이지 수 제한이 적용될 수 있습니다." },
        { question: "모바일에서도 사용할 수 있나요?", answer: "네. AlloraTools는 웹 서비스이므로 데스크톱과 모바일 브라우저에서 모두 사용할 수 있습니다." },
        { question: "앞으로 다른 도구도 추가되나요?", answer: "네. 장기적으로는 PDF 변환을 시작점으로, 파일·문서 작업 전반을 지원하는 멀티 툴 플랫폼으로 확장할 계획입니다." },
        { question: "서비스는 누가 운영하나요?", answer: "AlloraTools는 PLANB-John이 개인 형태로 운영하며, 공식 도메인은 https://www.alloratools.com 입니다." },
        { question: "문의는 어디로 하면 되나요?", answer: "문의나 제안은 planb.init@gmail.com 으로 보내주세요. 상황에 따라 답변까지 시간이 걸릴 수 있습니다." },
      ],
    },
  },
  en: {
    about: {
      title: "About AlloraTools",
      intro:
        "AlloraTools is a web-based file and document utility service built for quick tasks directly in the browser. You can start as a guest without signing up, while account users get a more continuous usage experience.",
      sections: [
        {
          title: "What AlloraTools is",
          paragraphs: [
            "AlloraTools focuses on practical file and document workflows that people need in day-to-day work and study.",
            "The service is designed to reduce setup friction and help users complete common tasks without installing additional software.",
            "It is an individually operated web utility service with a product direction centered on usefulness and clarity.",
          ],
        },
        {
          title: "Current core feature: PDF to JPG",
          paragraphs: [
            "The main feature today converts PDF pages into JPG images in a simple browser flow.",
            "This is useful when users need to share pages as images, extract visual content, or handle documents page by page.",
            "The workflow is intentionally straightforward so first-time users can complete conversions quickly.",
          ],
        },
        {
          title: "Who the service is for",
          paragraphs: [
            "AlloraTools is intended for students, office workers, freelancers, and anyone who needs quick document conversion.",
            "It is built for both occasional users who need one fast result and repeat users who process files more regularly.",
            "Multilingual support helps keep the service usable for people across different language preferences.",
          ],
        },
        {
          title: "Product principles and account model",
          paragraphs: [
            "The product is guided by simplicity, accessibility, usability, and a stable, trustworthy user experience.",
            "Guest access exists so users can begin immediately without unnecessary barriers.",
            "Signed-in users with verified email receive a higher free usage limit, which supports more consistent ongoing use.",
          ],
        },
        {
          title: "Operator information and direction",
          paragraphs: [
            "AlloraTools is operated by PLANB-John as an individually run service at https://www.alloratools.com.",
            "Development is iterative and based on practical needs observed from actual usage.",
            "Over time, the service aims to expand from PDF conversion into a broader multi-tool platform for file and document utilities.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      intro: "If you need help with the service or want to share feedback, please contact us by email.",
      emailLabel: "Contact email",
      email: "planb.init@gmail.com",
      responseNote: "Response time may vary depending on inquiry volume and issue complexity.",
      inquiryTitle: "You can contact us for",
      inquiryTypes: ["Bug reports", "Service issues", "General inquiries", "Suggestions and improvement ideas"],
    },
    faq: {
      title: "FAQ",
      intro: "Practical answers to common questions before you use AlloraTools.",
      items: [
        { question: "What is AlloraTools?", answer: "AlloraTools is a web-based file and document utility service. The current core feature is converting PDF pages into JPG images." },
        { question: "What does PDF to JPG conversion mean in practice?", answer: "It turns each page in a PDF into a JPG image file. This is useful when you need to share document pages as images or handle pages one by one." },
        { question: "Can I use AlloraTools without creating an account?", answer: "Yes. Guest usage is available, so you can start using the tool without signing up." },
        { question: "Why should I sign up if guest usage is already available?", answer: "Accounts help provide a more consistent experience for repeat users, and verified accounts receive a higher free daily usage limit." },
        { question: "What is the difference between guest usage and verified usage?", answer: "Guests can use up to 5 conversions per day. Signed-in users with verified email can use up to 10 conversions per day." },
        { question: "How do daily usage limits work?", answer: "Usage limits are applied per day. After you reach your daily free limit, you can use the service again when the next daily cycle starts." },
        { question: "Is usage deducted only after a successful conversion?", answer: "Yes. A usage count is deducted only when a conversion completes successfully." },
        { question: "Can I convert PDFs with multiple pages?", answer: "Yes. Multi-page PDFs are supported, though page limits can still apply depending on the current plan." },
        { question: "Can I use AlloraTools on mobile devices?", answer: "Yes. Because it is browser-based, you can use it on desktop and mobile browsers." },
        { question: "Will more tools be added later?", answer: "Yes. The long-term direction is to expand from PDF conversion into a broader multi-tool file/document utility platform." },
        { question: "Who operates the service?", answer: "AlloraTools is individually operated by PLANB-John at https://www.alloratools.com." },
        { question: "How can I contact AlloraTools?", answer: "Please email planb.init@gmail.com for support, bug reports, or suggestions." },
      ],
    },
  },
  ja: {
    about: {
      title: "AlloraToolsについて",
      intro:
        "AlloraToolsは、ブラウザで文書・ファイル作業をすばやく行うためのWebベースのユーティリティサービスです。ゲストとして登録なしで利用を開始でき、アカウント利用時には継続利用しやすい設計になっています。",
      sections: [
        {
          title: "AlloraToolsとは",
          paragraphs: [
            "AlloraToolsは、日常的に発生する文書・ファイル処理をオンラインで扱いやすくすることを目的としたサービスです。",
            "追加ソフトのインストールや複雑な手順をできるだけ減らし、必要な作業を短い流れで完了できるようにしています。",
            "個人運営のサービスとして、過度な拡大よりも実用性と継続的な改善を重視しています。",
          ],
        },
        {
          title: "現在の主機能：PDF to JPG変換",
          paragraphs: [
            "現在の中心機能は、PDFの各ページをJPG画像に変換する機能です。",
            "文書を画像として共有したい場面や、ページ単位で扱いたい作業に使いやすいよう構成しています。",
            "初めて使う方でも迷いにくいよう、操作フローはシンプルで分かりやすい形を目指しています。",
          ],
        },
        {
          title: "どのようなユーザー向けか",
          paragraphs: [
            "学生、オフィスワーカー、フリーランスなど、文書変換を日常的に行うユーザーを主な対象にしています。",
            "一度だけ使いたいユーザーにも、継続的に使いたいユーザーにも対応できる設計を意識しています。",
            "多言語対応により、言語環境の異なるユーザーでも同じ品質で利用できることを大切にしています。",
          ],
        },
        {
          title: "設計方針とアカウント利用",
          paragraphs: [
            "AlloraToolsは、シンプルさ・アクセシビリティ・使いやすさ・信頼しやすい体験を基本方針としています。",
            "ゲスト利用を可能にしているのは、登録前でもすぐに機能を試して必要な作業を進められるようにするためです。",
            "一方で、ログイン済みかつメール認証済みのユーザーには無料利用上限を高めに設定し、継続利用時の利便性を高めています。",
          ],
        },
        {
          title: "運営情報と今後の方向性",
          paragraphs: [
            "AlloraToolsはPLANB-Johnが個人で運営しており、運営ドメインは https://www.alloratools.com です。",
            "改善は実際の利用状況や要望をもとに段階的に進めています。",
            "長期的には、PDF変換を出発点として、文書・ファイル関連の複数ツールを提供するプラットフォームへ拡張していく予定です。",
          ],
        },
      ],
    },
    contact: {
      title: "お問い合わせ",
      intro: "不具合の報告やご意見などは、以下のメールアドレスまでご連絡ください。",
      emailLabel: "連絡先メール",
      email: "planb.init@gmail.com",
      responseNote: "お問い合わせ内容や状況により、返信までお時間をいただく場合があります。",
      inquiryTitle: "主なお問い合わせ内容",
      inquiryTypes: ["バグ報告", "サービスの不具合", "一般的なお問い合わせ", "改善提案・ご要望"],
    },
    faq: {
      title: "よくある質問",
      intro: "AlloraToolsの利用前によく確認されるポイントをまとめています。",
      items: [
        { question: "AlloraToolsはどのようなサービスですか？", answer: "AlloraToolsは、ブラウザで使えるファイル・文書向けのWebユーティリティです。現在の主機能はPDFをJPG画像へ変換するツールです。" },
        { question: "PDF to JPG変換とは、実際に何をする機能ですか？", answer: "1つのPDF内の各ページをJPG画像として出力する機能です。資料ページを画像で共有したいときや、ページ単位で扱いたいときに便利です。" },
        { question: "アカウントを作らなくても使えますか？", answer: "はい。ゲスト利用が可能なため、登録なしでも利用を開始できます。" },
        { question: "ゲスト利用できるのに、なぜアカウントがあるのですか？", answer: "継続利用するユーザーにより安定した利用体験を提供するためです。メール認証済みアカウントには無料利用上限を高く設定しています。" },
        { question: "ゲストとログイン・メール認証ユーザーの違いは？", answer: "ゲストは1日5回まで、ログイン後にメール認証を完了したユーザーは1日10回まで無料で変換できます。" },
        { question: "1日の利用上限はどのように計算されますか？", answer: "無料利用回数は日次で管理されます。上限に達した場合は、次の利用サイクルで再度利用できます。" },
        { question: "変換に失敗した場合でも回数は減りますか？", answer: "いいえ。利用回数が減るのは、変換が正常に完了した場合のみです。" },
        { question: "複数ページのPDFにも対応していますか？", answer: "はい、複数ページPDFに対応しています。ただし、プランに応じて1回あたりのページ数上限が適用されます。" },
        { question: "スマートフォンでも使えますか？", answer: "はい。Webサービスのため、PCブラウザとモバイルブラウザの両方で利用できます。" },
        { question: "今後、ほかのツールも追加されますか？", answer: "はい。長期的にはPDF変換を起点に、文書・ファイル作業向けのマルチツールへ拡張していく方針です。" },
        { question: "サービスの運営者は誰ですか？", answer: "AlloraToolsはPLANB-Johnが個人で運営しており、ドメインは https://www.alloratools.com です。" },
        { question: "問い合わせはどこからできますか？", answer: "不具合報告・ご質問・ご提案は planb.init@gmail.com までご連絡ください。" },
      ],
    },
  },
  es: {
    about: {
      title: "Acerca de AlloraTools",
      intro:
        "AlloraTools es una plataforma web de utilidades para archivos y documentos, diseñada para resolver tareas rápidas desde el navegador. Se puede usar como invitado sin registro, y las cuentas permiten una experiencia de uso más continua.",
      sections: [
        {
          title: "Qué es AlloraTools",
          paragraphs: [
            "AlloraTools está enfocado en tareas prácticas de manejo de archivos y documentos que aparecen en el trabajo y en el estudio diario.",
            "La idea central es reducir fricción: evitar instalaciones adicionales y permitir completar procesos comunes con pocos pasos.",
            "Es un servicio web operado de forma individual, con una dirección de producto basada en utilidad real.",
          ],
        },
        {
          title: "Función principal actual: PDF a JPG",
          paragraphs: [
            "La función principal hoy convierte páginas de PDF en imágenes JPG mediante un flujo sencillo en el navegador.",
            "Resulta útil para compartir páginas como imágenes, extraer contenido visual o trabajar documento por documento en formato de imagen.",
            "El proceso se mantiene claro y directo para que incluso usuarios nuevos puedan terminar la conversión sin complicaciones.",
          ],
        },
        {
          title: "Para quién está pensado",
          paragraphs: [
            "Está pensado para estudiantes, profesionales de oficina, freelancers y cualquier persona que necesite conversiones rápidas de documentos.",
            "Busca servir tanto a quien lo usa de forma ocasional como a quien realiza tareas repetidas con más frecuencia.",
            "El soporte multilingüe ayuda a mantener una experiencia usable para personas con diferentes preferencias de idioma.",
          ],
        },
        {
          title: "Principios del producto y modelo de cuenta",
          paragraphs: [
            "El producto se guía por principios de simplicidad, accesibilidad, usabilidad y una experiencia estable y confiable.",
            "El acceso como invitado existe para que cualquiera pueda empezar de inmediato, sin barreras innecesarias.",
            "Los usuarios con sesión iniciada y correo verificado reciben un límite gratuito más alto, pensado para un uso continuo.",
          ],
        },
        {
          title: "Información del operador y dirección futura",
          paragraphs: [
            "AlloraTools es operado por PLANB-John como un servicio gestionado de forma individual en https://www.alloratools.com.",
            "La evolución del servicio se realiza de forma gradual, según necesidades observadas en el uso real.",
            "A largo plazo, el objetivo es ampliar AlloraTools desde la conversión de PDF hacia una plataforma más amplia de herramientas para archivos y documentos.",
          ],
        },
      ],
    },
    contact: {
      title: "Contacto",
      intro: "Si tienes un problema con el servicio o una sugerencia, puedes escribirnos por correo.",
      emailLabel: "Correo de contacto",
      email: "planb.init@gmail.com",
      responseNote: "El tiempo de respuesta puede variar según el volumen de consultas y la complejidad del caso.",
      inquiryTitle: "Puedes contactarnos para",
      inquiryTypes: ["Reportes de errores", "Problemas del servicio", "Consultas generales", "Sugerencias e ideas de mejora"],
    },
    faq: {
      title: "Preguntas frecuentes",
      intro: "Aquí encontrarás respuestas claras a las dudas más comunes antes de usar AlloraTools.",
      items: [
        { question: "¿Qué es AlloraTools?", answer: "AlloraTools es una plataforma web de utilidades para archivos y documentos. Su función principal actual es convertir páginas PDF en imágenes JPG." },
        { question: "¿Qué significa convertir de PDF a JPG en la práctica?", answer: "Significa que cada página del PDF se convierte en un archivo de imagen JPG. Es útil para compartir páginas como imagen o trabajar el contenido por páginas." },
        { question: "¿Puedo usar el servicio sin crear una cuenta?", answer: "Sí. Puedes usarlo como invitado, sin registro obligatorio para empezar." },
        { question: "Si existe el modo invitado, ¿para qué sirve la cuenta?", answer: "La cuenta está pensada para quienes usan la herramienta con más frecuencia. Además, los usuarios con correo verificado tienen un límite diario gratuito más alto." },
        { question: "¿Qué diferencia hay entre invitado y usuario verificado?", answer: "El invitado puede hacer hasta 5 conversiones al día. El usuario con sesión iniciada y correo verificado puede hacer hasta 10 al día." },
        { question: "¿Cómo funciona el límite diario de uso?", answer: "El servicio aplica un número máximo de conversiones gratuitas por día. Cuando llegas al límite, puedes volver a usarlo en el siguiente ciclo diario." },
        { question: "¿Se descuenta uso solo cuando la conversión termina bien?", answer: "Sí. El uso se descuenta únicamente cuando la conversión se completa correctamente." },
        { question: "¿Se pueden convertir PDFs con varias páginas?", answer: "Sí. Se admiten PDFs multipágina, aunque pueden aplicarse límites de páginas según el plan vigente." },
        { question: "¿Funciona en móvil o tablet?", answer: "Sí. Al ser una herramienta web, puedes usarla desde navegadores de escritorio y también desde dispositivos móviles." },
        { question: "¿Van a añadir más herramientas en el futuro?", answer: "Sí. La dirección del servicio es crecer desde PDF a JPG hacia una plataforma multi-herramienta para tareas de archivos y documentos." },
        { question: "¿Quién opera AlloraTools?", answer: "AlloraTools es un servicio operado de forma individual por PLANB-John en https://www.alloratools.com." },
        { question: "¿Cómo puedo contactar con AlloraTools?", answer: "Puedes escribir a planb.init@gmail.com para soporte, reportes de errores o sugerencias." },
      ],
    },
  },
  de: {
    about: {
      title: "Über AlloraTools",
      intro:
        "AlloraTools ist ein webbasiertes Dienstangebot für Datei- und Dokumentaufgaben, das direkt im Browser genutzt werden kann. Die Nutzung ist ohne Registrierung als Gast möglich, während Kontonutzer von einer kontinuierlicheren Nutzung profitieren.",
      sections: [
        {
          title: "Was AlloraTools ist",
          paragraphs: [
            "AlloraTools konzentriert sich auf praktische Datei- und Dokumentabläufe, die im Alltag häufig gebraucht werden.",
            "Der Dienst soll typische Aufgaben ohne zusätzliche Installation und ohne unnötige Komplexität lösbar machen.",
            "Es handelt sich um einen individuell betriebenen Web-Utility-Service mit klarem Fokus auf Nutzbarkeit.",
          ],
        },
        {
          title: "Aktuelle Kernfunktion: PDF zu JPG",
          paragraphs: [
            "Derzeit steht die Umwandlung von PDF-Seiten in JPG-Bilder im Mittelpunkt.",
            "Das ist hilfreich, wenn Seiten als Bild geteilt, visuelle Inhalte extrahiert oder Dokumente seitenweise weiterverarbeitet werden sollen.",
            "Der Ablauf ist bewusst klar gehalten, damit auch neue Nutzer schnell zu einem Ergebnis kommen.",
          ],
        },
        {
          title: "Für wen der Dienst gedacht ist",
          paragraphs: [
            "AlloraTools richtet sich an Studierende, Büroangestellte, Freelancer und alle, die schnelle Dokumentkonvertierung benötigen.",
            "Die Plattform ist sowohl für gelegentliche Nutzung als auch für wiederkehrende Arbeitsabläufe ausgelegt.",
            "Durch Mehrsprachigkeit bleibt die Nutzung auch bei unterschiedlichen Sprachpräferenzen zugänglich.",
          ],
        },
        {
          title: "Produktprinzipien und Kontomodell",
          paragraphs: [
            "Leitprinzipien sind Einfachheit, Zugänglichkeit, gute Bedienbarkeit und eine verlässliche Nutzererfahrung.",
            "Gastzugang ist verfügbar, damit Nutzer ohne Hürden sofort starten können.",
            "Angemeldete und per E-Mail verifizierte Nutzer erhalten ein höheres kostenloses Nutzungslimit für kontinuierlichere Verwendung.",
          ],
        },
        {
          title: "Betreiberinformationen und Ausrichtung",
          paragraphs: [
            "AlloraTools wird von PLANB-John als individuell betriebenem Service unter https://www.alloratools.com geführt.",
            "Die Weiterentwicklung erfolgt schrittweise auf Basis realer Nutzungsanforderungen.",
            "Langfristig soll sich der Dienst von der PDF-Konvertierung zu einer breiteren Multi-Tool-Plattform für Datei- und Dokumentaufgaben entwickeln.",
          ],
        },
      ],
    },
    contact: {
      title: "Kontakt",
      intro: "Bei Problemen mit dem Dienst oder für Feedback kannst du uns per E-Mail erreichen.",
      emailLabel: "Kontakt-E-Mail",
      email: "planb.init@gmail.com",
      responseNote: "Die Antwortzeit kann je nach Anfrageaufkommen und Komplexität variieren.",
      inquiryTitle: "Du kannst uns kontaktieren zu",
      inquiryTypes: ["Fehlerberichten", "Serviceproblemen", "Allgemeinen Anfragen", "Vorschlägen und Verbesserungsideen"],
    },
    faq: {
      title: "FAQ",
      intro: "Hier findest du klare Antworten auf die wichtigsten Fragen vor der Nutzung von AlloraTools.",
      items: [
        { question: "Was ist AlloraTools?", answer: "AlloraTools ist ein webbasiertes Utility-Angebot für Datei- und Dokumentaufgaben. Aktuell liegt der Schwerpunkt auf der Umwandlung von PDF-Seiten in JPG-Bilder." },
        { question: "Was bedeutet PDF-zu-JPG-Konvertierung konkret?", answer: "Dabei wird jede Seite einer PDF als eigene JPG-Datei ausgegeben. Das ist praktisch, wenn Dokumentseiten als Bilder geteilt oder einzeln weiterverarbeitet werden sollen." },
        { question: "Kann ich den Dienst ohne Registrierung nutzen?", answer: "Ja. Du kannst AlloraTools als Gast verwenden und ohne Konto starten." },
        { question: "Warum gibt es Konten, wenn Gastnutzung möglich ist?", answer: "Konten sind für regelmäßige Nutzung gedacht. Verifizierte Nutzer erhalten ein höheres kostenloses Tageslimit und damit mehr Spielraum im Alltag." },
        { question: "Was ist der Unterschied zwischen Gast und verifiziertem Nutzer?", answer: "Gäste können bis zu 5 Konvertierungen pro Tag durchführen. Angemeldete Nutzer mit bestätigter E-Mail können bis zu 10 pro Tag nutzen." },
        { question: "Wie funktionieren die täglichen Nutzungslimits?", answer: "Es gibt ein tägliches Freikontingent. Wenn das Limit erreicht ist, ist die Nutzung wieder möglich, sobald der nächste Tageszyklus beginnt." },
        { question: "Wird Nutzung nur bei erfolgreicher Konvertierung abgezogen?", answer: "Ja. Eine Nutzung wird nur dann gezählt, wenn die Konvertierung erfolgreich abgeschlossen wurde." },
        { question: "Werden mehrseitige PDFs unterstützt?", answer: "Ja. Mehrseitige PDFs werden unterstützt, wobei je nach aktuellem Plan Seitenlimits gelten können." },
        { question: "Kann ich AlloraTools auf dem Smartphone nutzen?", answer: "Ja. Als Webdienst funktioniert AlloraTools sowohl im Desktop- als auch im mobilen Browser." },
        { question: "Werden später weitere Tools hinzukommen?", answer: "Ja. Langfristig soll AlloraTools von PDF-Konvertierung zu einer breiteren Multi-Tool-Plattform für Datei- und Dokumentaufgaben ausgebaut werden." },
        { question: "Wer betreibt den Service?", answer: "AlloraTools wird von PLANB-John als individuell betriebener Dienst unter https://www.alloratools.com betrieben." },
        { question: "Wie kann ich AlloraTools kontaktieren?", answer: "Für Support, Fehlermeldungen oder Feedback schreibe bitte an planb.init@gmail.com." },
      ],
    },
  },
};
