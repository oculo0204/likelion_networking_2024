import React from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import Back from '../../assets/img/Icon/back.svg';
import image96 from '../../assets/img/suggest/image96.svg';
import topBtn from '../../assets/img/suggest/topBtn.svg';


const SuggestDetail = () => {
    const { id } = useParams(); // URL에서 id 파라미터 추출
    const navigate = useNavigate();

    // 1~14까지의 이미지를 동적으로 임포트
    const images = Array.from({ length: 14 }, (_, index) =>
      require(`../../assets/img/suggest/recomm/${index + 1}.svg`)
    );


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        };


    return (
        <div className="suggestDetail_wrap container">
            <div>
                <div className='back-btn-head'>
                     <button onClick={() => navigate(-1)}>
                        <img src={Back} alt="Back" className='back' />
                    </button>
                    <h1>지금 바로 떠날 여행지 추천</h1>
                </div>
                <div className="detailBox">
                    <h2 className="detailMainTitle">일본 중부 카가와 현에<br />위치한 다카마쓰</h2>
                    <p>
                        다카마쓰는 일본의 소도시이지만 근교로 이동할 수 있는 교통수단이 잘 되어있어 3박4일 코스로 즐기기 딱이랍니다.<br />
                        에어서울에는 인천에서 다카마쓰까지 직항편이 있어 더더욱 편하게 다녀올 수 있어요.<br />
                        우동 투어, 섬 투어, 온천 투어, 쇼핑 등 다카마쓰를 즐길 수 있는 요소들은 정말 다양해요.<br />
                        오늘은 자연부터 트렌디한 카페까지 즐길 수 있는 다카마쓰의 여행 코스를 소개합니다.
                    </p>
                    <h4 className="detailSubTitle">다카마쓰 3박4일 여행코스</h4>
                    <p>
                        아래 일정은 에디터가 직접 소화한 3박4일 일정이에요.<br />
                        다카마쓰는 일본의 소도시인 만큼 바다와 자연을 감상할 수 있는 자연 명소가 많은 편이랍니다.<br />
                        하지만 테라마치, 마루가메마치, 이온몰 등 다양한 쇼핑가와 쇼핑몰도 있어 쇼핑까지 알차게 즐길 수 있어요.<br />
                    </p>
                     <div className="recomm">
                        <h2> 추천 일정</h2>
                        <p>
                            1일차 <br />
                            ✈️ 다카마쓰 공항 도착 <br />
                            🍜 곤피라 우동 <br />
                            🏯 고토히라궁 <br />
                            ♨️ 고토산가쿠 온천 료칸 <br /><br />

                            2일차 <br />
                            🛍 테라마치 쇼핑가 <br />
                            ☕️ 기타하마앨리 <br />
                            🏞 리쓰린공원 <br />
                            🛒 이온몰 <br /><br />

                            3일차 <br />
                            🏝 데지마 <br />
                            🚩쇼도시마 섬 투어 <br /><br />

                            4일차 <br />
                            🌳 다마모공원 ✈️ 다카마쓰 공항으로 이동 <br />
                        </p>
                     </div>
                     <img src={image96}/>
                     <p>
                         도쿄나 오사카 등 사람이 많은 일본 여행지에 지친 여행자라면, 다카마쓰만 한 여행지가 없죠.<br />
                         다른 여행지보다 조금 더 한적하고 평화롭게 즐길 수 있다는 것이 다카마쓰의 가장 큰 매력이랍니다.<br />
                         지금부터는 에디터가 직접 다녀온 곳 중 빼놓으면 안 되는 명소 네 군데만 소개할게요.<br />
                         다카마쓰 여행을 계획하고 있다면 아래 네 곳은 꼭 가보는 걸 추천해요!<br /><br />
                         다카마쓰 가볼만한곳
                     </p>
                     <h2>1. 고토히라궁</h2>
                     <img src={images[0]}/>
                     <p>
                         다카마쓰에서 전철을 타고 약 1시간 정도면 도착할 수 있는 작은 도시 고토히라.<br />
                        이곳은 우동의 원조 고장이라고 할 수 있는데요, 그래서인지 다양한 우동을 맛볼 수 있는 우동 투어도 있답니다.<br />
                     </p>
                      <img src={images[1]}/>
                      <p>
                          수많은 우동가게들을 지나면 만날 수 있는 고토히라의 대표 명소 고토히라궁.<br />
                         고토히라궁은 조즈산의 중간 지점에 위치하고 있어요.<br />
                         올라가는 길은 가파르지만, 길 자체가 멋져서 전망대의 역할도 대신하고 있어요.<br />
                      </p>
                      <img src={images[2]}/>
                       <p>
                           무려 내궁까지는 1368계단이 있는 고토히라궁.<br />
                           올라가는 길은 제법 험난하지만, 길 중간중간 기증자의 이름이 새겨진 돌,
                           운세 뽑기 등 다양한 구경거리가 있어 올라가는 길이 심심하지 않답니다.<br />
                       </p>
                   <img src={images[3]}/>
                      <p>
                          고토히라궁은 바다의 신 ‘곤피라’를 모시는 신사예요.<br />
                          카가와현은 일본 세토 내 해에 근접하고 있기 때문에,
                          바닷가 근처에서 일하는 이들의 안전을 비는 사람이 많았다고 해요.<br />
                          에디터가 방문했을 때도 고토히라궁에서 소원을 비는 관광객들이 많았답니다.<br />
                          오르는 길이 쉽지는 않았지만, 돌아보니 가장 일본스러운 순간이 아니었나 싶네요.<br />
                          날이 선선해지면 산책 삼아 방문해 보세요!<br />
                          <ul>
                              <li>이용시간 : 매일 06:00-18:00</li>
                              <li>입장료 : 무료</li>
                              <li>주소 : 892-1, Kotohira, Nakatado District, Kagawa 766-8501 일본 (구글맵)</li>
                          </ul>
                      </p>
                      <h2>2. 기타하마앨리</h2>
                      <img src={images[4]}/>
                         <p>
                             다카마쓰에도 트렌디한 카페거리가 있다?
                             꼭 우리나라의 성수동이 떠오르는 기타하마앨리.<br />
                             다카마쓰 시내에서 가까운 기타하마 앨리는
                             오래된 창고와 폐건물을 리노베이션해
                             카페와 소품샵 등으로 운영하고 있어요.<br />
                         </p>
                      <img src={images[5]}/>
                        <p>
                        양철 창고 감성과 푸른 풍경이 어우러져 독특한 감성을 자아내는 곳이랍니다.<br />
                        곳곳에 선물처럼 카페와 편집샵들이 숨어있어 그냥 걷기만 해도 구경하는 재미가 쏠쏠해요.<br />
                        </p>
                      <img src={images[6]}/>
                        <p>
                            특히 기타하마앨리는 바닷가와 인접하고 있어서, 커피나 식사를 즐기고 바닷가 산책을 즐기기도 좋답니다.<br />
                            다만 다카마쓰 시내와는 조금 거리가 떨어져 있어서,
                            **전철(다카마쓰 칫코 역에서 도보 약 10분)**을 이용하거나, 다카마쓰 시내에서 자전거를 렌탈해 방문하는 것도 추천해요.<br />
                            <ul>
                                <li>주소 : 4-14 Kitahamacho, Takamatsu, Kagawa 760-0031 일본 (구글맵)</li>
                            </ul>
                        </p>
                    <h2>3. 다마모공원</h2>
                        <img src={images[7]}/>
                        <img src={images[8]}/>
                            <p>
                                다카마쓰성이 위치하고 있는 다마모공원.<br />
                                다카마쓰성을 감싸고 있는 이 공원은 아름다운 조경으로 유명해요.<br />
                                영주의 별장 등 특별한 장소로 이용되었던 곳인 만큼 일본식 정원을 구경할 수 있어요.<br />
                            </p>
                        <img src={images[9]}/>
                            <p>
                                다마모 공원의 독특한 점은, 바다와 가까이 있기 때문에 해자 주변에 있는 물이 모두 바닷물이라는 점이에요.<br />
                                이곳에서는 뱃놀이까지 즐길 수 있답니다.<br />
                            </p>
                        <img src={images[10]}/>
                            <p>
                                입장료가 있는 다카마쓰성.<br />
                                동문과 서문에서 입장할 수 있어서공원 내부에서도 편하게 접근이 가능해요.<br />
                                천수각 전망대에서는 다마모 공원의 풍경을 한눈에 감상할 수 있으니 꼭 한번 올라가 보시길 추천해요.<br />
                                <ul>
                                    <li>이용시간 : 매일 08:30-17:00</li>
                                    <li>주소 : 2-1 Tamamocho, Takamatsu, Kagawa 760-0030 일본 (구글맵)</li>
                                </ul>
                            </p>
                        <h2>3. 리쓰린공원</h2>
                        <img src={images[11]}/>
                            <p>
                                다카마쓰에서 가장 유명한 관광지를 꼽으라면 바로 리쓰린공원이 아닐까 싶어요.<br />
                                리쓰린공원은 대표적인 에도시대 정원으로, 100년 이상의 역사를 간직한 공원이랍니다.<br />
                            </p>
                        <img src={images[12]}/>
                            <p>
                                에도시대부터 메이지시대를 걸쳐 영주의 별장으로 이용되었던 리쓰린공원.<br />
                                현재는 현립공원으로 운영되고 있고, 입장료를 지불하면 누구나 자유롭게 관람할 수 있어요.<br />
                                봄에는 아름다운 벚꽃과 초록 풍경이, 가을에는 매혹적인 단풍으로 가득해 사계절 내내 장관을 이루는 곳이랍니다.<br />
                            </p>
                        <img src={images[13]}/>
                            <p>
                                총면적이 75만 제곱미터에 달할 만큼 어마어마한 크기의 리쓰린공원.<br />
                                둘러보는 데만 약 2시간 이상 소요되어 넉넉하게 시간을 잡고 방문하는 걸 추천해요.<br />
                                다카마쓰 리쓰린공원에서는 300년 이상 된 소철, 폭포, 해송숲 등 멋진 자연 풍경을 감상할 수 있어 반드시 방문해야 하는 다카마쓰의 명소로
                                자리매김했답니다.<br /><br />

                                리쓰린공원에는 13개의 언덕과 6개의 연못이 있어요.<br />
                                각 언덕에서 보는 리쓰린공원의 풍경은 정말이지 예술이랍니다.<br />
                                리쓰린공원에 방문했다면 언덕에 올라 꼭 전경을 사진으로 담아보시길 바라요.<br />
                                <ul>
                                    <li>이용시간 : 매일 05:30~19:00</li>
                                    <li>입장료 : 어른 410엔 / 어린이 170엔</li>
                                    <li>주소 : 1-chome-20-16 Ritsurincho, Takamatsu, Kagawa 760-0073 일본 (구글맵)</li>
                                </ul>
                            </p>
                </div>
                <Link to="/suggest">
                    <button className="blueBtnWide"> 목록으로 돌아가기 </button>
                </Link>
                <button className="topBtn" onClick={scrollToTop}>
                    <img src={topBtn} alt="Top" />
                </button>
            </div>
        </div>

    );
};

export default SuggestDetail;
