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
      intro: "AlloraTools는 누구나 브라우저에서 바로 사용할 수 있는 웹 기반 파일/유틸리티 도구 서비스입니다.",
      sections: [
        {
          title: "서비스 소개",
          paragraphs: [
            "현재 핵심 기능은 PDF to JPG 변환으로, PDF 문서를 이미지로 빠르게 바꿀 수 있도록 설계되어 있습니다.",
            "불필요한 복잡함 없이 간단하고 직관적인 도구 경험을 제공하는 것을 목표로 합니다.",
          ],
        },
        {
          title: "앞으로의 방향",
          paragraphs: [
            "AlloraTools는 실제로 자주 필요한 온라인 작업을 중심으로 도구를 점진적으로 추가해 나갈 예정입니다.",
            "접근성, 사용성, 실용성을 기준으로 기능을 확장하겠습니다.",
          ],
        },
        {
          title: "운영 정보",
          bullets: ["운영자명: PLANB-John", "운영 형태: 개인 운영", "도메인: https://www.alloratools.com"],
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
      intro: "AlloraTools is a web-based file and utility service designed to be easy to use directly in your browser.",
      sections: [
        {
          title: "What the service does",
          paragraphs: [
            "Our current core feature is PDF to JPG conversion, making it simple to turn PDF pages into image files.",
            "We focus on practical tools with a clean, straightforward experience.",
          ],
        },
        {
          title: "What comes next",
          paragraphs: [
            "Over time, AlloraTools may add more online utilities based on real user needs.",
            "We prioritize simplicity, accessibility, and day-to-day usefulness.",
          ],
        },
        {
          title: "Operator information",
          bullets: ["Operator: PLANB-John", "Operation type: individual operator", "Domain: https://www.alloratools.com"],
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
      intro: "AlloraToolsは、ブラウザから手軽に使えるWebベースのファイル/ユーティリティサービスです。",
      sections: [
        {
          title: "サービス概要",
          paragraphs: [
            "現在の主要機能はPDF to JPG変換で、PDFページを画像として扱いやすく変換できます。",
            "複雑さを減らし、シンプルで実用的な体験を重視しています。",
          ],
        },
        {
          title: "今後について",
          paragraphs: [
            "AlloraToolsでは、実際の利用ニーズに合わせてオンラインツールを段階的に追加していく予定です。",
            "アクセシビリティと使いやすさを大切にしながら改善を続けます。",
          ],
        },
        {
          title: "運営情報",
          bullets: ["運営者名: PLANB-John", "運営形態: 個人運営", "ドメイン: https://www.alloratools.com"],
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
      intro: "AlloraTools es un servicio web de utilidades y archivos pensado para usarse fácilmente desde el navegador.",
      sections: [
        {
          title: "Qué ofrece el servicio",
          paragraphs: [
            "La función principal actual es la conversión de PDF a JPG, para transformar páginas PDF en imágenes de forma sencilla.",
            "Nos enfocamos en herramientas prácticas con una experiencia clara y sin complicaciones.",
          ],
        },
        {
          title: "Próximos pasos",
          paragraphs: [
            "Con el tiempo, AlloraTools podrá incorporar más utilidades en línea según las necesidades reales de los usuarios.",
            "Priorizamos simplicidad, accesibilidad y utilidad diaria.",
          ],
        },
        {
          title: "Información del operador",
          bullets: ["Operador: PLANB-John", "Tipo de operación: operador individual", "Dominio: https://www.alloratools.com"],
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
      intro: "AlloraTools ist ein webbasiertes Datei- und Utility-Angebot, das direkt im Browser einfach nutzbar ist.",
      sections: [
        {
          title: "Was der Dienst bietet",
          paragraphs: [
            "Die aktuelle Kernfunktion ist die PDF-zu-JPG-Konvertierung, mit der sich PDF-Seiten unkompliziert in Bilder umwandeln lassen.",
            "Wir setzen auf praktische Werkzeuge mit klarer, einfacher Bedienung.",
          ],
        },
        {
          title: "Ausblick",
          paragraphs: [
            "Im Laufe der Zeit kann AlloraTools weitere Online-Tools ergänzen, basierend auf realen Nutzerbedürfnissen.",
            "Dabei stehen Einfachheit, Zugänglichkeit und praktischer Nutzen im Mittelpunkt.",
          ],
        },
        {
          title: "Betreiberinformationen",
          bullets: ["Betreiber: PLANB-John", "Betriebsform: Einzelbetreiber", "Domain: https://www.alloratools.com"],
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
