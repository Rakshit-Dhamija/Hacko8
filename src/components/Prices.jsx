import { useState } from "react";
import { PricingCard } from "@/components/ui/dark-gradient-pricing";
import {
  FaTrophy,
  FaCode,
  FaLightbulb,
  FaSyncAlt,
  FaStar,
  FaBrain
} from "react-icons/fa";

// FlippableCard component
function FlippableCard({
  teamName,
  tier,
  prize,
  benefits,
  isHighlighted = false,
  rank,
  category,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const trophyColors = {
    1: "text-yellow-400",
    2: "text-slate-300",
    3: "text-orange-400",
  };

  const getRankSpecificStyling = () => {
    const solidBaseBg = "bg-zinc-900/95";
    const highlightedSolidBaseBg = "bg-zinc-900/95";

    if (rank === 1) {
      return {
        border:
          "border-2 border-yellow-400/80 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]",
        borderRadius: "rounded-2xl",
        bgColor: `${highlightedSolidBaseBg} bg-gradient-to-br from-amber-600/20 via-yellow-500/15 to-amber-200/10`,
        trophyIconSize: isHighlighted ? 40 : 32,
        tierText: "text-xl md:text-2xl text-yellow-300",
        teamNameText: isHighlighted ? "text-2xl md:text-3xl" : "text-2xl",
        prizeText:
          "bg-yellow-500/20 text-yellow-200 text-base px-4 py-1.5 font-medium",
      };
    } else if (rank === 2) {
      return {
        border:
          "border border-slate-300/60 shadow-[0_0_15px_rgba(209,213,219,0.2)] hover:shadow-[0_0_20px_rgba(209,213,219,0.25)]",
        borderRadius: "rounded-xl",
        bgColor: `${solidBaseBg} bg-gradient-to-br from-slate-400/10 via-blue-gray-300/5 to-slate-500/10`,
        trophyIconSize: 28,
        tierText: "text-lg text-slate-200",
        teamNameText: "text-xl",
        prizeText: "bg-slate-400/20 text-slate-200 px-3 py-1 font-medium",
      };
    } else if (rank === 3) {
      return {
        border:
          "border border-orange-500/60 shadow-[0_0_15px_rgba(249,115,22,0.2)] hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]",
        borderRadius: "rounded-xl",
        bgColor: `${solidBaseBg} bg-gradient-to-br from-amber-700/15 via-orange-600/10 to-amber-500/10`,
        trophyIconSize: 28,
        tierText: "text-lg text-orange-300",
        teamNameText: "text-xl",
        prizeText: "bg-orange-500/20 text-orange-300 px-3 py-1 font-medium",
      };
    } else if (rank === 4) {
      return {
        border:
          "border border-sky-500/60 shadow-[0_0_15px_rgba(14,165,233,0.2)] hover:shadow-[0_0_20px_rgba(14,165,233,0.25)]",
        borderRadius: "rounded-xl",
        bgColor: `${solidBaseBg} bg-gradient-to-br from-sky-600/10 via-transparent to-sky-600/10`,
        trophyIconSize: null,
        tierText: "text-base text-sky-300",
        teamNameText: "text-lg",
        prizeText: "bg-sky-500/20 text-sky-300 px-3 py-1 font-medium",
      };
    }
    return {
      border: "border border-zinc-700",
      borderRadius: "rounded-xl",
      bgColor: "bg-zinc-900/95",
      trophyIconSize: null,
      tierText: "text-base text-zinc-300",
      teamNameText: "text-lg",
      prizeText: "bg-zinc-700/40 text-zinc-300 px-3 py-1",
    };
  };

  const styles = getRankSpecificStyling();

  const getCategoryIcon = () => {
    switch(category.toLowerCase()) {
      case "hackowasp 7":
        return <FaCode className="mr-1" />;
      case "ideathon":
        return <FaLightbulb className="mr-1" />;
      case "ml contest":
        return <FaBrain className="mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`flip-card relative group cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] ${styles.border} ${styles.borderRadius} w-full overflow-hidden`}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: "1500px",
        height: isHighlighted ? "400px" : "350px",
      }}
    >
      <div
        className="flip-card-inner w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className={`flip-card-front absolute w-full h-full ${styles.borderRadius} overflow-hidden ${styles.bgColor}`}
          style={{
            backfaceVisibility: "hidden",
            zIndex: isFlipped ? 0 : 1,
          }}
        >
          <div className="relative flex flex-col items-center justify-between p-5 md:p-6 h-full w-full shadow-lg">
            <div className="absolute top-3 left-3 text-zinc-500 text-xs flex items-center opacity-70 group-hover:opacity-100 transition-opacity">
              <FaSyncAlt className="mr-1" size={10} /> Flip
            </div>
            {rank <= 3 && styles.trophyIconSize && (
              <div
                className={`absolute top-3 right-3 ${trophyColors[rank]} drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]`}
              >
                <FaTrophy size={24} />
              </div>
            )}
            <div className="relative z-10 flex flex-col items-center text-center w-full pt-3">
              <p className="text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wider flex items-center">
                {getCategoryIcon()}
                {category}
              </p>
              {rank <= 3 && styles.trophyIconSize && (
                <div className={`${trophyColors[rank]} my-2`}>
                  <FaTrophy size={styles.trophyIconSize} />
                </div>
              )}
              {rank === 4 && (
                <div className="my-2 text-sky-400">
                  <FaStar size={28} />
                </div>
              )}
              <h3 className={`${styles.tierText} font-semibold mb-1`}>
                {tier}
              </h3>
              <h2
                className={`font-bold tracking-tight text-zinc-50 ${styles.teamNameText} leading-tight`}
              >
                {teamName}
              </h2>
            </div>
            <div className="relative z-10 mt-auto text-center w-full pb-2">
              <div className={`inline-block rounded-md ${styles.prizeText}`}>
                {prize}
              </div>
            </div>
          </div>
        </div>
        {/* Back */}
        <div
          className={`flip-card-back absolute w-full h-full ${styles.borderRadius} overflow-hidden bg-zinc-900`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            zIndex: isFlipped ? 1 : 0,
          }}
        >
          <PricingCard
            tier={tier}
            prize={prize}
            bestFor={`${category} - ${tier}`}
            benefits={benefits}
            isHighlighted={isHighlighted}
            rank={rank}
            className={`${rank === 2 || rank === 3 ? 'benefits-two-columns' : ''}`}
          />
        </div>
      </div>
    </div>
  );
}
// WinnersSection component
function WinnersSection() {
  const firstPrizeBenefits = [
    { text: "TIM HORTONS Coupons 20% OFF", checked: true },
    { text: "TIM HORTONS Magnets", checked: true },
    { text: ".xyz Domain", checked: true },
    { text: "Exclusive Goodies Pack", checked: true },
    { text: "Industry Mentors Support", checked: true },
    { text: "Free Rust Workshop Access", checked: true },
    { text: "3x Ledger Nano", checked: true },
  ];
  const secondThirdPrizeBenefits = [
    { text: "TIM HORTONS Coupons 20% OFF", checked: true },
    { text: "TIM HORTONS Magnets", checked: true },
    { text: ".xyz Domain", checked: true },
    { text: "Cool Goodies", checked: true },
    { text: "Industry Mentors Support", checked: false },
    { text: "Rust Workshop Discount", checked: false },
    { text: "Chance to win Ledger Nano", checked: false },
  ];
  const specialAwardBenefits = [
    { text: "TIM HORTONS Coupons 10% OFF", checked: true },
    { text: ".xyz Domain", checked: true },
    { text: "Selected Goodies", checked: true },
    { text: "Industry Mentors Support", checked: false },
  ];

  return (
    <section className="relative overflow-hidden text-foreground py-14 md:py-20">
      {/* Background decorations */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300">
              🏆 Event Winners
            </span>
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
            Celebrating the brilliant minds and their outstanding achievements.
            Tap a card to reveal the prizes.
          </p>
        </div>

        {/* HackOWASP 7 */}
        <div className="mb-16 md:mb-20 p-6 rounded-2xl bg-gradient-to-br from-blue-900/10 via-indigo-900/5 to-transparent">
          <h3 className="text-2xl md:text-3xl text-zinc-100 font-bold mb-8 text-center tracking-tight">
            HackOWASP 7 Champions
          </h3>
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="w-full max-w-lg">
              <FlippableCard
                teamName="GAMMA-CODERS"
                tier="1st Prize"
                prize="₹15,000 Cash"
                isHighlighted={true}
                rank={1}
                category="HackOWASP 7"
                benefits={firstPrizeBenefits}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-6 mb-8">
            <FlippableCard
              teamName="PIXGENZ"
              tier="2nd Prize"
              prize="₹10,000 Cash"
              rank={2}
              category="HackOWASP 7"
              benefits={secondThirdPrizeBenefits}
            />
            <FlippableCard
              teamName="CRYPTICCREW"
              tier="3rd Prize"
              prize="₹5,000 Cash"
              rank={3}
              category="HackOWASP 7"
              benefits={secondThirdPrizeBenefits}
            />
          </div>
          <h4 className="text-xl text-sky-300 font-semibold mb-5 text-center">
            Special Recognitions
          </h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-6">
            <FlippableCard
              teamName="FORCEPUSH"
              tier="Best First Year Team"
              prize="₹2,000 Cash"
              rank={4}
              category="HackOWASP 7"
              benefits={specialAwardBenefits}
            />
            <FlippableCard
              teamName="COLLABLN"
              tier="Open Innovation Award"
              prize="₹2,000 Cash"
              rank={4}
              category="HackOWASP 7"
              benefits={specialAwardBenefits}
            />
          </div>
        </div>

        {/* Ideathon */}
        <div className="mb-16 md:mb-20 p-6 rounded-2xl bg-gradient-to-br from-emerald-900/10 via-teal-900/5 to-transparent">
          <h3 className="text-2xl md:text-3xl text-zinc-100 font-bold mb-8 text-center tracking-tight">
            Ideathon Innovators
          </h3>
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="w-full max-w-lg">
              <FlippableCard
                teamName="UN-ACROBATS"
                tier="1st Prize"
                prize="₹15,000 Cash"
                isHighlighted={true}
                rank={1}
                category="Ideathon"
                benefits={firstPrizeBenefits}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-6">
            <FlippableCard
              teamName="CRYPTOBAPS"
              tier="2nd Prize"
              prize="₹10,000 Cash"
              rank={2}
              category="Ideathon"
              benefits={secondThirdPrizeBenefits}
            />
            <FlippableCard
              teamName="IMAGINEDRAGONS"
              tier="3rd Prize"
              prize="₹5,000 Cash"
              rank={3}
              category="Ideathon"
              benefits={secondThirdPrizeBenefits}
            />
          </div>
        </div>

        {/* ML Contest */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/10 via-fuchsia-900/5 to-transparent">
          <h3 className="text-2xl md:text-3xl text-zinc-100 font-bold mb-8 text-center tracking-tight">
            ML Contest Prodigies
          </h3>
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="w-full max-w-lg">
              <FlippableCard
                teamName="YUNSUXIAOZI"
                tier="1st Prize"
                prize="₹15,000 Cash"
                isHighlighted={true}
                rank={1}
                category="ML Contest"
                benefits={firstPrizeBenefits}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-6">
            <FlippableCard
              teamName="JOHN"
              tier="2nd Prize"
              prize="₹10,000 Cash"
              rank={2}
              category="ML Contest"
              benefits={secondThirdPrizeBenefits}
            />
            <FlippableCard
              teamName="BAITHUNTER635"
              tier="3rd Prize"
              prize="₹5,000 Cash"
              rank={3}
              category="ML Contest"
              benefits={secondThirdPrizeBenefits}
            />
          </div>
        </div>
      </div>

      {/* Add this style to your global CSS or as an inline style tag */}
      <style jsx global>{`
        /* Two-column benefits layout for 2nd and 3rd place cards */
        .benefits-two-columns .space-y-2,
        .benefits-two-columns .space-y-4 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        
        .benefits-two-columns .space-y-2 > div,
        .benefits-two-columns .space-y-4 > div {
          margin-top: 0 !important;
        }
        
        /* Safari-specific fixes */
        @media not all and (min-resolution:.001dpcm) { 
          @supports (-webkit-appearance:none) {
            .flip-card-inner {
              transform-style: flat !important;
              -webkit-transform-style: flat !important;
            }
            
            .flip-card-back {
              opacity: 0;
            }
            
            .flip-card-back.flipped {
              opacity: 1;
            }
            
            .flip-card-front {
              opacity: 1;
            }
            
            .flip-card-front.flipped {
              opacity: 0;
            }
          }
        }
      `}</style>
    </section>
  );
}

export { WinnersSection };
