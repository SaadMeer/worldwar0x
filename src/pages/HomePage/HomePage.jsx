import React from 'react'
import './HomePage.css';
// Components
import Accordion from '../../components/Accordion/Accordion'
import NftSoldier from "../../assets/low-poly-solder.png";
import line from "../../assets/image 1153.png";
import helmat from "../../assets/helmat.png";
import cloud1 from "../../assets/image 1118.png";
import cloudW from "../../assets/image 1125.png";
import helicopter from "../../assets/helicopter.png";
import cloud2 from "../../assets/image 1119.png";
import soldiers from "../../assets/war-nobg 1.png";
import worldLine from "../../assets/Group 1.png";
import land1 from "../../assets/image 1063.png";
import land2 from "../../assets/image 1064.png";
import land3 from "../../assets/image 1065.png";
import land4 from "../../assets/image 1066.png";
import land5 from "../../assets/image 1069.png";
import landsmall1 from "../../assets/Group4.png";
import landsmall3 from "../../assets/land3.png";
import landsmall2 from "../../assets/land2.png";
import landsmall4 from "../../assets/land4.png";
import landsmall5 from "../../assets/land5.png";
import flag from "../../assets/flag.png";
import flagSecureImg from "../../assets/image 1061.png";
import china from "../../assets/China 2.png";
import sword from "../../assets/sword.png";
import taiwan from "../../assets/Taiwan 2.png";
import taiwanSectionBigImg from "../../assets/image 1062.png";
import russia from "../../assets/Russia 3.png";
import ukraine from "../../assets/Ukraine 3.png";
import ukraineSectionBigImg from "../../assets/image 1036.png";
import ukraine2SectionBigImg from "../../assets/image 1088.png";
import multipleLine from "../../assets/Group 3.png";
import ClassicsIcon from "../../assets/noun-colosseum-1473758 (1) 1.png";
import squadsPuppet from "../../assets/Group 4.png";
import squadsLine from "../../assets/Rectangle 53.png";
import mobileVersionImg from "../../assets/Group 5.png";
import appStore from "../../assets/Group 6.png";
import googlePlay from "../../assets/Group 7.png";
import ecosystemImg from "../../assets/Auto-Tranny-Header-12 2.png";
import ecosystemflower from "../../assets/Group8.png";
import hand from "../../assets/hand.png";
import group65 from "../../assets/Group 65.png";
import thesoldiersNFT from "../../assets/photo_2023-08-14_15-43-51 1.png";
import warx from "../../assets/Group 62.png";
import bugs from "../../assets/bug.png";
import blueFlower from "../../assets/blueFlowers.png";
import fractal from "../../assets/Fractal2 3.png";
import Odyn from "../../assets/Logo - Odyn (2) 3.png";
import blumint from "../../assets/blumint 3.png";
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import ThreeTypeNFT from '../../components/ThreeTypeNFT/ThreeTypeNFT';
import BattleItOut from '../../components/BattleItOut/BattleItOut';
import CountryReach from '../../components/CountryReach/CountryReach';
// import ClassicsImg1 from '../../assets/Containers 7.png';
// import ClassicsImg2 from '../../assets/Dusted 6.png';
// import ClassicsImg3 from '../../assets/Containers 7.png';
import northPuppet from '../../assets/northpuppet.png';
import Carousel from '../../components/Carousel/Carousel';

import CarouselPuppet from '../../components/CarouselPuppet/CarouselPuppet';


const HomePage = () => {


    return (
        <div>
            <Navbar />

            <HeroSection />

            <div className="FirstEditionContainer">
                <div className="FirstEditionContainerCentered">
                    <div className="FirstEditionContainer-Text">
                        <h4>FIRST EDITION</h4>
                        <h5>SOLDIER NFTs</h5>
                        <p>These are the most important collectibles in our ecosystem and where the most value will accrue. These are your hero characters. Play with them, bet with them and stake them for rewards.</p>
                        <div className="FirstEditionContainer-btn">
                            <div class="GetWhiteListedBtn FirstEditionBTN">
                                <a href="#"><span>GET WHITELISTED</span></a>
                            </div>
                            <a href="#">MORE INFO</a>
                        </div>
                        <div className="FirstEditionTrance-text">
                            <h4>Tranche #1 </h4>
                            <h5>Mints September 26</h5>
                            <img src={line} alt="" />
                        </div>
                    </div>
                    <div className="FirstEditionContainer-Img">
                        <img src={NftSoldier} alt="" />
                    </div>
                </div>
            </div>

            <ThreeTypeNFT />

            <CarouselPuppet />

            <div className="ANewEraContainer">
                <div className="ANewEraContainerCentered">
                    <div className="ANewEraContainer-img">
                        <img src={cloud1} alt="" />
                        <img src={cloudW} alt="" />
                        <img src={helicopter} alt="" />
                    </div>
                    <div className="ANewEra-txt">
                        <h2>A NEW ERA</h2>
                        <img src={cloud2} alt="" />
                    </div>
                    <p>World War 0x brings a <span className="red-span">fully-featured</span> FPS to the <span className="red-span">browser</span>, allowing anyone to play completely free.</p>
                </div>
                <div className="ANewEra-img">
                    <img src={soldiers} alt="" />
                </div>
            </div>

            <div className="TwoTypeSectionContainer">
                <div className="bold-line"></div>
                <div className="TwoTypeSectionContainerCentered">
                    <div className="TwoTypeSectionBox">
                        <h4>FREE-TO-PLAY FPS WHERE PLAYERS CAN SHOOT, SOCIALIZE, BET & BUILD.</h4>
                    </div>
                    <div className="TwoTypeSectionBox1">
                        <h4>A new era for <span className='boldText'>gaming, community & ownership. Earn</span> and <span className='boldText'>bet</span> WARX TOKENS while playing <span className='boldText'>competitive matches.</span> Build maps to earn extra <span className='boldText'>$WARX</span>.</h4>
                    </div>
                    <img src={worldLine} className="worldLine" alt="" />
                </div>
            </div>

            <div className="BattleItOutContainer">
                <h5>BATTLE IT OUT IN SQUADS BY</h5>
                <h2>LAND, AIR AND SEA</h2>
                <div className="BattleItOutContainerCentered">
                    <BattleItOut img={land1} icon={landsmall1} title="GROUND TRANSPORTS" />
                    <BattleItOut img={land2} icon={landsmall3} title="HELICOPTERS" />
                    <BattleItOut img={land3} icon={landsmall2} title="TANKS" />
                    <BattleItOut img={land4} icon={landsmall4} title="NAVAL TRANSPORTS" />
                    <BattleItOut img={land5} icon={landsmall5} title="FIGHTER JETS" />
                    <BattleItOut img={land4} icon={landsmall1} title="TURRETS" />
                </div>
            </div>

            <div className="ABCDE-Container">
                <div className="ABCDE-ContainerCentered">
                    <div className="ABCDE-ContainerBox">
                        <span>A</span>
                    </div>
                    <div className="ABCDE-ContainerBox-dots">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="ABCDE-ContainerBox">
                        <span>B</span>
                    </div>
                    <div className="ABCDE-ContainerBox-dots">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="ABCDE-ContainerBox">
                        <span>C</span>
                    </div>
                    <div className="ABCDE-ContainerBox-dots">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="ABCDE-ContainerBox">
                        <span>D</span>
                    </div>
                    <div className="ABCDE-ContainerBox-dots">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="ABCDE-ContainerBox">
                        <span>E</span>
                    </div>
                </div>
            </div>

            <div className="FlagContainer">
                <div className="FlagCentered">
                    <div className="FlagBox">
                        <h2><span className="green-span">ADVANCE</span><br />&<span className="lightred-span">SECURE</span><br /><span className="white-span">GAME MODE</span></h2>
                        <img src={flag} alt="" />
                    </div>
                    <div className="FlagBox">
                        <h5>In Advance and Secure the objective for both teams is to <span>capture and hold Control Points (aka flags) in a preset order.</span></h5>
                    </div>
                </div>
                <div className="flogSecureContainer">
                    <div className="flogSecureBox">
                        <div className="flogSecureBoxInner">
                            <p>Capturing enemy flags penalizes the enemy team and rewards you with additional tickets. The team who first runs out of tickets will lose.</p>
                            <br />
                            <br />
                            <p>Teams of up to 10 players are pitted against each other in intense modern combat battlefields with all kinds of vehicles at their disposal. In this low poly environment, the flow of the game is dictated by the players.</p>
                        </div>
                    </div>
                    <div className="flogSecureBox">
                        <img src={flagSecureImg} alt="" />
                    </div>
                </div>
            </div>

            <div className="CountryReachConatiner">
                <CountryReach img1={china} img2={sword} img3={taiwan} img4={taiwanSectionBigImg} title="TAIWAN BEACH INVASION" />
                <CountryReach img1={russia} img2={sword} img3={ukraine} img4={ukraineSectionBigImg} title="BATTLE OF BAKHMUT" />
                <CountryReach img1={china} img2={sword} img3={ukraine} img4={ukraine2SectionBigImg} title="ODESA PORT" />
                <img src={multipleLine} className="multipleLine" alt="" />
            </div>

            <div className="ClassicsSectionContainer">
                <img src={ClassicsIcon} alt="" />
                <h2>CLASSICS</h2>
                <p>Nostalgia, fan favorites — fast-paced beloved maps. After our Token Generation maps will be voted on by the DAO.</p>
                {/* <div className='classicsImgGridContainer'>
                    <div className='classicsImgGridBox'><img src={ClassicsImg1} alt="" /><h5>CONTAINERS</h5></div>
                    <div className='classicsImgGridBox'><img src={ClassicsImg2} alt="" /><h5>DUSTED</h5></div>
                    <div className='classicsImgGridBox'><img src={ClassicsImg3} alt="" /><h5>POOL PARTY</h5></div>
                </div> */}
            </div>
            <Carousel />


            <div className="SquadsSectionContainer">
                <div className="SquadsSectionContainer-Box">
                    <div className="SquadsSectionContainer-InnerBox">
                        <h3>SQUADS</h3>
                        <img src={squadsLine} alt="" />
                        <p>Team up with friends in squads of up to eight players.</p>
                    </div>

                    <div className="SquadsSectionContainer-InnerBox">
                        <h4>SQUAD & PROXIMITY</h4>
                        <h3>VOICE CHAT</h3>
                        <img src={squadsLine} alt="" />
                        <p>Only members of your squad can listen and talk in Squad chat.</p>
                        <br />
                        <p>Proximity Voice Chat allows anyone to hear you based on your distance in-game to them.</p>
                    </div>

                </div>
                <div className="SquadsSectionContainer-Box">
                    <img src={squadsPuppet} className="squadsPuppet" alt="" />
                </div>
            </div>

            <div className="MobileVersionContainer">

                <div className="MobileVersionContainerBox">
                    <img src={mobileVersionImg} className="mobileVersionImg" alt="" />
                </div>

                <div className="MobileVersionContainerBox">
                    <h2>MOBILE VERSIONS</h2>
                    <p>World War 0x will soon be available on the go on iOS and Android devices.</p>
                    <div className="appstoreimg-box">
                        <img src={appStore} alt="" />
                        <img src={googlePlay} alt="" />
                    </div>
                </div>

            </div>

            <div className="EcoSystemContainer">

                <div className="EcoSystemContainerBox">
                    <img src={ecosystemflower} alt="" />
                    <h2>THE WARX<br /> ECOSYSTEM</h2>
                    <ul>
                        <li>Community</li>
                        <li>Gaming</li>
                        <li>Ownership</li>
                    </ul>
                    <p className="EcoSystem-p">World War 0x is both free-to-play and play-to-earn. Anyone can play for free at WorldWar0x.io; however to access the play-to-earn competitive betting ecosystem players must have a Soldier NFT in their wallet —  either by owning or renting it.</p>
                    <div className="EcoSystem-textIcon">
                        <p>WARX will offer a robust renting system to allow owners to rent their NFTs out by the hour, day or week.</p>
                        <img src={hand} alt="" />
                    </div>
                    <div className="EcoSystem-textIcon">
                        <p>Tokens have a variety of utilities:  exclusive NFTs, skins, betting, staking, DAO governance and more.</p>
                        <img src={group65} alt="" />
                    </div>

                </div>

                <div className="EcoSystemContainerBox">
                    <img src={ecosystemImg} alt="" />
                </div>

            </div>

            <div className="TheSoldiersNFTContainer">

                <div className="TheSoldiersNFTContainerCentered">
                    <div className="thesoldiersNFTBox">
                        <h2>THE SOLDIERS</h2>
                        <p>Tranche #1 of the Soldier NFTs will be minted September 30. These OG collectibles kick off the World War 0x ecosystem - boosting 3D files, in-game accessibility and integration into our betting protocol and  map creator tools.</p>
                    </div>

                    <div className="thesoldiersNFTBox">
                        <img src={thesoldiersNFT} alt="" />
                    </div>
                </div>

            </div>

            <div className="WarxContainer">

                <div className="WarxContainerBox">
                    <img src={warx} alt="" />
                </div>
                <div className="WarxContainerBox-2">
                    <div className="WarxContainerInnerBox">
                        <h2>$WARX</h2>
                        <p>The World War 0x ecosystem and game will be powered by the $WARX token. The $WARX Token is an ERC-20 Token integral to the experience being created by Curfluffle.</p>
                    </div>
                    <div className="WarxContainerInnerBox">
                        <div className="WarxContainerInnerBox-img-bugs">
                            <img src={bugs} alt="" />
                            <img src={bugs} alt="" />
                            <img src={bugs} alt="" />
                        </div>
                        <p>There is a wide variety of ways that gamers, collectors and community members will be able to use and receive $WARX in the ecosystem. Through engagement in competitive gameplay, social activities, community rewards and through contribution to the creator economy.</p>
                    </div>
                </div>

            </div>

            <div className="BettingSectionContainer">
                <div className="BettingSectionContainerCentered">

                    <div className="BettingSectionContainerBox">
                        <div className="BettingSectionInnerBox">PAY TO SPAWN</div>
                        <div className="BettingSectionInnerBox">ESPORTS  BETTING </div>
                        <div className="BettingSectionInnerBox">PVP BETTING</div>
                        <div className="BettingSectionInnerBox">SKINS BETTING</div>
                        <img src={blueFlower} alt="" />
                    </div>
                    <div className="BettingSectionContainerBox">
                        <h3>BETTING</h3>
                        <div className="blue-line-BETTING"></div>
                        <p>World War 0x will offer many ways to bet within our ecosystem.</p>
                    </div>

                </div>
            </div>

            <div className="RoadmapSectionContainer">
                <h2>ROADMAP</h2>
                <div className='RoadmapSectionContainer-flex'>
                    <div className="RoadmaplineContainer">
                        <div class="circle">
                            <div class="line top-line"></div>
                            <div class="line bottom-line"></div>
                        </div>
                        <div class="circle">
                            <div class="line top-line"></div>
                            <div class="line bottom-line"></div>
                        </div>
                        <div class="circle">
                            <div class="line top-line"></div>
                            <div class="line bottom-line"></div>
                        </div>
                    </div>

                    <div className="RoadMapTextConatiner">
                        <div className="RoadMapTextConatinerCentered">
                            <div className="RoadMapTextInnerBox">
                                <h4>Q4 <span className="orange-span">2023</span></h4>
                                <ul>
                                    <li>Soldier NFT Sale</li>
                                    <li>IOs & Android App</li>
                                </ul>
                            </div>
                            <div className="RoadMapTextInnerBox">
                                <h4>Q4 <span className="orange-span">2023</span></h4>
                                <ul>
                                    <li>Soldier NFT Sale</li>
                                    <li>IOs & Android App</li>
                                </ul>
                            </div>
                            <div className="RoadMapTextInnerBox">
                                <h4>Q4 <span className="orange-span">2023</span></h4>
                                <ul>
                                    <li>Soldier NFT Sale</li>
                                    <li>IOs & Android App</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="PartnersSectionContainer">
                <h2>PARTNERS</h2>
                <div className="PartnersSectionContainerCentered">
                    <img src={fractal} alt="" />
                    <img src={Odyn} alt="" />
                    <img src={blumint} alt="" />
                </div>
            </div>

            <div className="FAQsSectionContainer">
                <h2>FAQ</h2>
                <div className='FaqsSectionCentered'>
                    <Accordion
                        title="WHEN IS THE MINT?"
                        content="There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don't look even
          slightly believable."
                    />
                    <Accordion
                        title="IS THE GAME FREE?"
                        content="Yes! Generic Viagra contains the same active ingredient as
          brand-name Viagra and is just as effective in treating ED. In
          fact, the only difference is the price. Five Corners Rx's
          U.S.-based pharmacy ensures that our generic Viagra meets the
          same quality, safety, and efficacy standards as the brand-name
          version."
                    />
                    <Accordion
                        title="DO YOU HAVE AN APP?"
                        content="Yes! Generic Viagra contains the same active ingredient as
          brand-name Viagra and is just as effective in treating ED. In
          fact, the only difference is the price. Five Corners Rx's
          U.S.-based pharmacy ensures that our generic Viagra meets the
          same quality, safety, and efficacy standards as the brand-name
          version."
                    />
                    <Accordion
                        title="HOW TO WHISTLIST?"
                        content="Yes! Generic Viagra contains the same active ingredient as
          brand-name Viagra and is just as effective in treating ED. In
          fact, the only difference is the price. Five Corners Rx's
          U.S.-based pharmacy ensures that our generic Viagra meets the
          same quality, safety, and efficacy standards as the brand-name
          version."
                    />
                    <Accordion
                        title="IS THE $WARX TOKEN LIVE?"
                        content="Yes! Generic Viagra contains the same active ingredient as
          brand-name Viagra and is just as effective in treating ED. In
          fact, the only difference is the price. Five Corners Rx's
          U.S.-based pharmacy ensures that our generic Viagra meets the
          same quality, safety, and efficacy standards as the brand-name
          version."
                    />
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default HomePage