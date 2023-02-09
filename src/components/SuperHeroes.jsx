import './SuperHeroes.css';

function SuperHeroe(props) {
    return (
        <div className='super-heroe-card'>
            <img src={props.superHeroePic}></img>
            <h2 className='super-heroe-character'>{props.superHeroeCharacter}</h2>
            <div className='super-heroe-comics-universe'><b>Вселенная:</b> {props.comicsUniverse}</div>
            <div className='super-heroe-alter-ego'><b>Альтер эго:</b> {props.alterEgo}</div>
            <div className='super-heroe-type-of-activity'><b>Род деятельности:</b> {props.typeOfActivity}</div>
            <div className='super-heroe-friends'><b>Друзья:</b> {props.friends}</div>
            <div className='super-heroe-super-powers'><b>Суперсилы:</b> {props.superPowers}</div>
            <div className='super-heroe-more-detailed'><b>Подробнее:</b> {props.moreDetailed}</div>
        </div>
    );
}

export default SuperHeroe;