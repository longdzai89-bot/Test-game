import {useMemo,useState} from 'react';
import Chat from '../components/Chat.jsx';
import '../styles/world.css';

const zones=[
  ['Thanh Chinh','/assets/backgrounds/main-city.jpg'],
  ['Rừng Linh Thú','/assets/backgrounds/forest.jpg'],
  ['Tuyết Sơn','/assets/backgrounds/heaven.jpg'],
  ['Sa Mạc','/assets/backgrounds/desert.jpg'],
  ['Địa Ngục','/assets/backgrounds/hell.jpg'],
];

export default function World(){
  const [zone,setZone]=useState(0); const [dead,setDead]=useState(false);
  const current=useMemo(()=>zones[zone],[zone]);
  return <main className="world">
    <div className="world-stage" style={{backgroundImage:`url(${current[1]})`}}>
      <div className="world-top"><div><b>{current[0]}</b><span> • Khu vực an toàn</span></div><div className="world-stats">Lv.50 · Luyện Hư · HP 125000/125000 · MP 5640/5640</div></div>
      <div className="world-player" aria-label="Người chơi">
        <div className="nameplate"><b>Thanh Vân Sơn</b><small>Lv.50 · Luyện Hư</small></div>
        <div className="hp"><i/></div>
        <img src="/assets/characters/player-male.png" alt="Nhân vật"/>
        <div className="shadow"/>
      </div>
      <div className="world-controls"><button onClick={()=>setZone((zone+1)%zones.length)}>Khu tiếp theo</button><button onClick={()=>setDead(true)}>Mô phỏng tử trận</button></div>
      <div className="zone-strip">{zones.map(([name,img],i)=><button className={i===zone?'active':''} key={name} onClick={()=>setZone(i)}><img src={img} alt=""/><span>{name}</span></button>)}</div>
      <Chat/>
      {dead && <div className="respawn-overlay"><div className="respawn-card"><img src="/assets/overlays/death-respawn.jpg" alt=""/><div className="respawn-copy"><strong>Đã bại trận</strong><p>Không mất trang bị hay vật phẩm. Bạn sẽ được đưa về nơi ban đầu.</p><button onClick={()=>setDead(false)}>Trở về điểm hồi sinh</button></div></div></div>}
    </div>
  </main>
}
