import React from 'react';
import { Redirect } from 'react-router-dom';

import HZZDiscover from '@/pages/discover';
import HZZRecommend from "@/pages//discover/c-pages/recommend";
import HZZRanking from "@/pages/discover/c-pages/ranking";
import HZZSongs from "@/pages/discover/c-pages/songs";
import HZZDjradio from "@/pages/discover/c-pages/djradio";
import HZZArtist from "@/pages/discover/c-pages/artist";
import HZZAlbum from "@/pages/discover/c-pages/album";
// import HZZPlayer from "@/pages/player";

import HZZMine from '@/pages/mine';
import HZZFriends from '@/pages/friends';

const routes = [
    {
        path: "/",
        exact: true,
        // component: HZZDiscover,
        render: () => (
            <Redirect to="/discover" />
        )
    },
    {
        path: "/discover",
        component: HZZDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path: "/discover/recommend",
                component: HZZRecommend
            },
            {
                path: "/discover/ranking",
                component: HZZRanking
            },
            {
                path: "/discover/songs",
                component: HZZSongs
            },
            {
                path: "/discover/djradio",
                exact: true,
                component: HZZDjradio
            },
            {
                path: "/discover/artist",
                component: HZZArtist
            },
            {
                path: "/discover/album",
                component: HZZAlbum
            },
            // {
            //     path: "/discover/player",
            //     component: HZZPlayer
            // }
        ]
    },
    {
        path: "/mine",
        component: HZZMine,
    },
    {
        path: "/friends",
        component: HZZFriends,
    }
]

export default routes;