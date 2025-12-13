// Import Music Covers
import kalapastanganCover from '../../assets/kalapastangan.png';
import balisongCover from '../../assets/balisong .png';
import creepCover from '../../assets/creep .png';
import mundoCover from '../../assets/mundo.png';
import panaginipCover from '../../assets/panaginip.png';
import sagipCover from '../../assets/sagip.png';
import medisinaCover from '../../assets/Medisina .png';
import sesameCover from '../../assets/Sesame Syrup.png';
import secretdoorCover from '../../assets/secret door.png';
import allthestarsCover from '../../assets/All The Stars.png';
import meanItCover from '../../assets/mean it.png';

// Import Movie Covers
import despicableMeCover from '../../assets/Despicable Me.png';
import carsCover from '../../assets/cars.png';
import moanaCover from '../../assets/Moana.png';
import monstersCover from '../../assets/Monsters.png';
import toyStoryCover from '../../assets/toys story.png';
import findingNemoCover from '../../assets/finding nemo.png';
import howToTrainYourDragonCover from '../../assets/how to train your dragon.png';
import megamindCover from '../../assets/megamind.png';
import turboCover from '../../assets/turbo.png';
import hotelTransylvaniaCover from '../../assets/hotel transylvania.png';

// Import Game Covers
import mobileLegendCover from '../../assets/mobile legend.png';
import gta5Cover from '../../assets/gta5.png';
import valorantCover from '../../assets/valorant.png';
import minecraftCover from '../../assets/minecraft.png';
import clashOfClansCover from '../../assets/clash of clans.png';
import robloxCover from '../../assets/roblox.png';
import csgoCover from '../../assets/csgo.png';

// Import Placeholder for Anime
import placeholderCover from '../../assets/bunz_aboutme.png';

const interestsData = {
    music: {
        title: "Favorite Music",
        emoji: "🎵",
        items: [
            { id: 1, title: "Kalapastangan", artist: "fitterkarma", album: "Kalapastangan", date: "Sep 22, 2025", duration: "3:45", cover: kalapastanganCover },
            { id: 2, title: "Balisong", artist: "Rico Blanco", album: "Your Universe", date: "Sep 21, 2025", duration: "3:58", cover: balisongCover },
            { id: 3, title: "Creep", artist: "Radiohead", album: "Pablo Honey", date: "Sep 20, 2025", duration: "3:56", cover: creepCover },
            { id: 4, title: "Mundo", artist: "IV of Spades", album: "ClapClapClap!", date: "Sep 19, 2025", duration: "5:50", cover: mundoCover },
            { id: 5, title: "Panaginip", artist: "nicole", album: "Panaginip", date: "Sep 18, 2025", duration: "4:20", cover: panaginipCover },
            { id: 6, title: "Sagip", artist: "Jan Roberts", album: "Sagip", date: "Sep 17, 2025", duration: "3:52", cover: sagipCover },
            { id: 7, title: "Medisina", artist: "Zild", album: "Medisina", date: "Sep 16, 2025", duration: "4:05", cover: medisinaCover },
            { id: 8, title: "Sesame Syrup", artist: "Cigarettes After Sex", album: "Cigarettes After Sex", date: "Sep 15, 2025", duration: "4:48", cover: sesameCover },
            { id: 9, title: "Mean It", artist: "Lauv & LANY", album: "~how i'm feeling~", date: "Sep 14, 2025", duration: "3:53", cover: meanItCover },
            { id: 10, title: "All The Stars", artist: "Kendrick Lamar, SZA", album: "Black Panther", date: "Sep 13, 2025", duration: "3:52", cover: allthestarsCover }
        ]
    },
    movies: {
        title: "Favorite Movies",
        emoji: "🎬",
        sections: [
            {
                title: "You should watch",
                items: [
                    { title: "Despicable Me", subtitle: "2010 • Animation/Comedy", cover: despicableMeCover },
                    { title: "Cars", subtitle: "2006 • Animation/Comedy", cover: carsCover },
                    { title: "Moana", subtitle: "2016 • Animation/Adventure", cover: moanaCover },
                    { title: "Monsters, Inc.", subtitle: "2001 • Animation/Comedy", cover: monstersCover },
                    { title: "Toy Story", subtitle: "1995 • Animation/Adventure", cover: toyStoryCover },
                    { title: "Finding Nemo", subtitle: "2003 • Animation/Adventure", cover: findingNemoCover },
                    { title: "How to Train Your Dragon", subtitle: "2010 • Animation/Action", cover: howToTrainYourDragonCover },
                    { title: "Megamind", subtitle: "2010 • Animation/Comedy", cover: megamindCover },
                    { title: "Turbo", subtitle: "2013 • Animation/Sport", cover: turboCover },
                    { title: "Hotel Transylvania", subtitle: "2012 • Animation/Comedy", cover: hotelTransylvaniaCover }
                ]
            }
        ]
    },
    gaming: {
        title: "Favorite Games",
        emoji: "🎮",
        sections: [
            {
                title: "Top Picks",
                items: [
                    { title: "Mobile Legends", subtitle: "MOBA", cover: mobileLegendCover },
                    { title: "GTA 5", subtitle: "Open World / Action", cover: gta5Cover },
                    { title: "Valorant", subtitle: "Tactical Shooter", cover: valorantCover },
                    { title: "Minecraft", subtitle: "Sandbox Survival", cover: minecraftCover },
                    { title: "Clash of Clans", subtitle: "Strategy", cover: clashOfClansCover },
                    { title: "Roblox", subtitle: "Game Platform", cover: robloxCover },
                    { title: "Counter-Strike", subtitle: "Tactical Shooter", cover: csgoCover }
                ]
            }
        ]
    },
    anime: {
        title: "Favorite Anime",
        emoji: "👺",
        sections: [
            {
                title: "Must Watch",
                items: [
                    { title: "One Piece", subtitle: "Adventure/Fantasy", cover: placeholderCover },
                    { title: "Naruto", subtitle: "Ninja/Action", cover: placeholderCover },
                    { title: "Attack on Titan", subtitle: "Dark Fantasy", cover: placeholderCover },
                    { title: "Demon Slayer", subtitle: "Action/Supernatural", cover: placeholderCover },
                    { title: "Jujutsu Kaisen", subtitle: "Supernatural/Action", cover: placeholderCover }
                ]
            }
        ]
    }
};

export default interestsData;
