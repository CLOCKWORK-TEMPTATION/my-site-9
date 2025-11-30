
export interface ResponsiveConfig {
  cardWidth: number
  cardHeight: number
  fontSize: number
  subtitleSize: number
  vShapePositions: Array<{ top: string; left: string; rotation: number }>
  phase5Positions: { top: string; left: string; rotation: number; zIndex: number }[]
}

class HeroConfiguration {
  private static instance: HeroConfiguration
  
  // Singleton Pattern: لضمان وجود نسخة واحدة فقط من الإعدادات
  private constructor() {}

  public static getInstance(): HeroConfiguration {
    if (!HeroConfiguration.instance) {
      HeroConfiguration.instance = new HeroConfiguration()
    }
    return HeroConfiguration.instance
  }

  // Encapsulation: حساب القيم بناءً على العرض يتم هنا فقط
  public getResponsiveValues(width: number): ResponsiveConfig {
    const isMobile = width < 768
    const isTablet = width < 1024

    return {
      cardWidth: isMobile ? 160 : isTablet ? 200 : 240,
      cardHeight: isMobile ? 200 : isTablet ? 250 : 300,
      fontSize: isMobile ? 48 : isTablet ? 72 : 96,
      subtitleSize: isMobile ? 18 : isTablet ? 24 : 30,
      vShapePositions: [
        { top: "33%", left: isMobile ? "65%" : isTablet ? "70%" : "70%", rotation: 20 },
        { top: "52%", left: isMobile ? "25%" : isTablet ? "75%" : "65%", rotation: 15 },
        { top: "72%", left: isMobile ? "35%" : isTablet ? "60%" : "60%", rotation: 8 },
        { top: "82%", left: "50%", rotation: 0 },
        { top: "72%", left: isMobile ? "65%" : isTablet ? "40%" : "40%", rotation: -8 },
        { top: "52%", left: isMobile ? "75%" : isTablet ? "40%" : "35%", rotation: -15 },
        { top: "33%", left: isMobile ? "35%" : isTablet ? "30%" : "30%", rotation: -20 },
      ],
      phase5Positions: [
        { top: "15%", left: "15%", rotation: -10, zIndex: 10 },
        { top: "20%", left: "85%", rotation: 12, zIndex: 11 },
        { top: "50%", left: "5%", rotation: -5, zIndex: 12 },
        { top: "50%", left: "95%", rotation: 8, zIndex: 13 },
        { top: "85%", left: "20%", rotation: -15, zIndex: 14 },
        { top: "85%", left: "80%", rotation: 10, zIndex: 15 },
        { top: "10%", left: "50%", rotation: 0, zIndex: 9 }, // Top center
      ],
    }
  }
}

export const heroConfig = HeroConfiguration.getInstance()
