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
      intro: "AlloraTools 이용 전에 많이 묻는 질문을 정리했습니다.",
      items: [
        { question: "AlloraTools는 어떤 서비스인가요?", answer: "웹에서 바로 사용하는 파일/유틸리티 도구 서비스이며, 현재는 PDF to JPG 변환 기능을 제공합니다." },
        { question: "서비스는 무료인가요?", answer: "네. 현재 기본 사용은 무료로 제공되며, 계정 상태에 따라 일일 무료 사용 횟수가 적용됩니다." },
        { question: "게스트는 하루에 몇 번 사용할 수 있나요?", answer: "게스트는 하루 5회까지 무료로 사용할 수 있습니다." },
        { question: "이메일 인증 회원은 하루에 몇 번 사용할 수 있나요?", answer: "인증 회원은 하루 10회까지 무료로 사용할 수 있습니다." },
        { question: "왜 이메일 인증이 필요한가요?", answer: "계정 보호와 사용량 정책 적용, 비정상 사용 방지를 위해 이메일 인증이 필요합니다." },
        { question: "현재 지원하는 파일 형식은 무엇인가요?", answer: "현재는 PDF 입력 파일을 JPG 이미지로 변환하는 기능을 지원합니다." },
        { question: "업로드한 파일은 영구 저장되나요?", answer: "업로드 파일은 변환 처리를 위해 사용되며, 정책에 따라 보관 후 삭제될 수 있습니다." },
        { question: "변환이 실패하는 이유는 무엇인가요?", answer: "파일 손상, 형식 문제, 페이지/용량 제한 초과, 일시적 서버 상태 등의 이유로 실패할 수 있습니다." },
        { question: "앞으로 도구가 더 추가되나요?", answer: "네. 실제 활용도가 높은 온라인 도구를 단계적으로 추가할 계획입니다." },
        { question: "운영자에게 어떻게 연락할 수 있나요?", answer: "planb.init@gmail.com 으로 문의해 주세요." },
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
      intro: "Quick answers to common questions about AlloraTools.",
      items: [
        { question: "What does AlloraTools do?", answer: "AlloraTools provides web-based file and utility tools. Right now, the main feature is PDF to JPG conversion." },
        { question: "Is the service free?", answer: "Yes. The current service includes free daily usage with limits based on account status." },
        { question: "How many times can guests use the service?", answer: "Guests can use the service 5 times per day for free." },
        { question: "How many times can verified members use the service?", answer: "Verified members can use the service 10 times per day for free." },
        { question: "Why do I need email verification?", answer: "Email verification helps protect accounts, apply usage policy correctly, and reduce abuse." },
        { question: "What file types are supported right now?", answer: "At this time, the service supports converting PDF input files to JPG images." },
        { question: "Is my uploaded file stored permanently?", answer: "Uploaded files are used for conversion processing and may be deleted based on policy." },
        { question: "Why did my conversion fail?", answer: "Conversion may fail because of a damaged file, format issues, page/size limits, or temporary server conditions." },
        { question: "Will more tools be added in the future?", answer: "Yes. More practical online tools may be added over time." },
        { question: "How can I contact the operator?", answer: "Please email planb.init@gmail.com." },
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
      intro: "AlloraToolsに関する主な質問と回答です。",
      items: [
        { question: "AlloraToolsは何をするサービスですか？", answer: "ブラウザで使えるファイル/ユーティリティツールを提供するサービスで、現在はPDF to JPG変換が中心機能です。" },
        { question: "サービスは無料ですか？", answer: "はい。現在はアカウント状態に応じた日次上限付きで無料利用できます。" },
        { question: "ゲストは1日に何回使えますか？", answer: "ゲストは1日5回まで無料で利用できます。" },
        { question: "認証済みメンバーは1日に何回使えますか？", answer: "メール認証済みメンバーは1日10回まで無料で利用できます。" },
        { question: "なぜメール認証が必要ですか？", answer: "アカウント保護、利用ポリシー適用、不正利用防止のためです。" },
        { question: "現在対応しているファイル形式は？", answer: "現在はPDF入力ファイルをJPG画像へ変換する機能に対応しています。" },
        { question: "アップロードしたファイルは永久保存されますか？", answer: "アップロードファイルは変換処理のために利用され、ポリシーに従って削除される場合があります。" },
        { question: "変換に失敗するのはなぜですか？", answer: "ファイル破損、形式の問題、ページ数/容量制限、サーバーの一時的な状態などが原因となる場合があります。" },
        { question: "今後ツールは追加されますか？", answer: "はい。実用性の高いオンラインツールを順次追加する予定です。" },
        { question: "運営者への連絡方法は？", answer: "planb.init@gmail.com までメールでご連絡ください。" },
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
      intro: "Respuestas rápidas a preguntas comunes sobre AlloraTools.",
      items: [
        { question: "¿Qué hace AlloraTools?", answer: "AlloraTools ofrece herramientas web de archivos y utilidades. Actualmente, la función principal es convertir PDF a JPG." },
        { question: "¿El servicio es gratuito?", answer: "Sí. El servicio actual incluye uso diario gratuito con límites según el tipo de cuenta." },
        { question: "¿Cuántas veces pueden usar el servicio los invitados?", answer: "Los invitados pueden usar el servicio 5 veces al día de forma gratuita." },
        { question: "¿Cuántas veces pueden usar el servicio los miembros verificados?", answer: "Los miembros verificados pueden usar el servicio 10 veces al día de forma gratuita." },
        { question: "¿Por qué necesito verificación por correo?", answer: "La verificación por correo ayuda a proteger cuentas, aplicar correctamente la política de uso y prevenir abusos." },
        { question: "¿Qué tipos de archivo se admiten actualmente?", answer: "Por ahora, se admite la conversión de archivos PDF de entrada a imágenes JPG." },
        { question: "¿Mi archivo subido se guarda permanentemente?", answer: "Los archivos subidos se usan para el proceso de conversión y pueden eliminarse según la política." },
        { question: "¿Por qué falló mi conversión?", answer: "La conversión puede fallar por archivo dañado, problemas de formato, límites de páginas/tamaño o condiciones temporales del servidor." },
        { question: "¿Se agregarán más herramientas en el futuro?", answer: "Sí. Es posible que se añadan más herramientas prácticas con el tiempo." },
        { question: "¿Cómo puedo contactar al operador?", answer: "Escríbenos a planb.init@gmail.com." },
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
      intro: "Kurze Antworten auf häufige Fragen zu AlloraTools.",
      items: [
        { question: "Was macht AlloraTools?", answer: "AlloraTools bietet webbasierte Datei- und Utility-Tools. Aktuell ist PDF-zu-JPG die Hauptfunktion." },
        { question: "Ist der Dienst kostenlos?", answer: "Ja. Derzeit gibt es kostenlose tägliche Nutzung mit Limits je nach Kontostatus." },
        { question: "Wie oft können Gäste den Dienst nutzen?", answer: "Gäste können den Dienst 5-mal pro Tag kostenlos nutzen." },
        { question: "Wie oft können verifizierte Mitglieder den Dienst nutzen?", answer: "Verifizierte Mitglieder können den Dienst 10-mal pro Tag kostenlos nutzen." },
        { question: "Warum brauche ich eine E-Mail-Verifizierung?", answer: "Die Verifizierung hilft beim Kontoschutz, bei korrekter Anwendung der Nutzungsrichtlinien und bei Missbrauchsprävention." },
        { question: "Welche Dateitypen werden derzeit unterstützt?", answer: "Derzeit wird die Umwandlung von PDF-Eingabedateien in JPG-Bilder unterstützt." },
        { question: "Wird meine hochgeladene Datei dauerhaft gespeichert?", answer: "Hochgeladene Dateien werden für die Konvertierung verwendet und können gemäß Richtlinie gelöscht werden." },
        { question: "Warum ist meine Konvertierung fehlgeschlagen?", answer: "Mögliche Gründe sind beschädigte Dateien, Formatprobleme, Seiten-/Größenlimits oder vorübergehende Serverbedingungen." },
        { question: "Werden künftig weitere Tools hinzugefügt?", answer: "Ja. Im Laufe der Zeit können weitere praktische Online-Tools ergänzt werden." },
        { question: "Wie kann ich den Betreiber kontaktieren?", answer: "Bitte schreibe an planb.init@gmail.com." },
      ],
    },
  },
};
