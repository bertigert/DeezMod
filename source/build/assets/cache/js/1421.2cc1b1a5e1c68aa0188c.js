"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[1421],{A2sV:(t,e,r)=>{r.d(e,{$1e:()=>Er,$FS:()=>xr,$IV:()=>Pe,AgB:()=>je,B1A:()=>$,BMS:()=>ht,BXP:()=>di,CN7:()=>Vt,CwG:()=>Re,D2L:()=>cr,DCO:()=>oe,DI4:()=>Mr,DNU:()=>ti,DPj:()=>f,Dh1:()=>_r,Dmu:()=>Wt,DpH:()=>ne,Dvu:()=>y,EG:()=>le,Ew:()=>ee,FJX:()=>ki,G98:()=>Xt,Ggf:()=>Ht,H91:()=>si,Hi1:()=>be,HwP:()=>$i,I6U:()=>S,I7O:()=>pi,ICy:()=>ss,IoY:()=>Ur,IvY:()=>Ui,IxQ:()=>Zt,JAg:()=>Yt,KDJ:()=>Qe,KuJ:()=>A,LHG:()=>I,LLq:()=>_e,LQK:()=>Ii,LZl:()=>zi,LrA:()=>c,M7C:()=>gi,Mij:()=>a,MmF:()=>zr,N$N:()=>u,N6A:()=>Ct,NlW:()=>zt,O7r:()=>Nt,OD9:()=>Oe,ONi:()=>as,ONu:()=>Mi,ORW:()=>Ke,PKC:()=>vi,Q13:()=>is,QNb:()=>Tr,RsC:()=>Fr,SNU:()=>Je,Sx2:()=>ts,TF:()=>rr,T_E:()=>Ue,U3y:()=>ue,UJq:()=>Te,V9d:()=>Rt,VZ1:()=>_i,Vc2:()=>ur,Wyk:()=>xe,XBt:()=>ve,Y1z:()=>Ie,YCc:()=>rs,Ypw:()=>$e,ZO1:()=>At,_At:()=>ci,a40:()=>Ti,aD2:()=>pe,aZE:()=>sr,bVd:()=>gr,by3:()=>l,ct1:()=>P,d8s:()=>Qi,dez:()=>Gi,dj:()=>wt,efT:()=>Kr,epo:()=>ke,fL0:()=>jr,fSF:()=>dr,fW1:()=>p,g1V:()=>Le,gWG:()=>tr,hWf:()=>pr,hhP:()=>ie,iqi:()=>o,jky:()=>$r,kqj:()=>ge,kuS:()=>Pr,l4E:()=>Or,lDW:()=>E,mAL:()=>Ne,mcr:()=>kr,nPg:()=>Pi,nZ$:()=>Jr,oGM:()=>xi,oih:()=>bt,ovp:()=>vr,p9C:()=>ar,qAq:()=>Ei,rb0:()=>m,rdE:()=>d,rqF:()=>T,sJs:()=>Ji,sV3:()=>n,sfq:()=>Bt,t1v:()=>Gr,tjO:()=>ze,tkN:()=>ji,u0N:()=>Lt,v4u:()=>Oi,vi:()=>g,vjx:()=>qt,w8_:()=>ri,we3:()=>Fi,weQ:()=>Dt,wgW:()=>Ge,wi_:()=>Me,x87:()=>Ir,xxF:()=>Ee,y02:()=>Qr,yJp:()=>ai,yRK:()=>We,zEs:()=>Ki});var i=r("Au7y");const s={};let n=function(t){return t.ALPHA="ALPHA",t.NONE="NONE",t.RANK="RANK",t.RELEASE_DATE="RELEASE_DATE",t}({}),a=function(t){return t.COMPILATION="COMPILATION",t.KARAOKE="KARAOKE",t.LIVE="LIVE",t.STUDIO="STUDIO",t}({}),o=function(t){return t.ALBUM="ALBUM",t.EP="EP",t.SINGLES="SINGLES",t.UNKNOWN="UNKNOWN",t}({}),c=function(t){return t.AUDIO="AUDIO",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_ARTIST="WRONG_ARTIST",t}({}),u=function(t){return t.ARTIST_ALREADY_EXIST="ARTIST_ALREADY_EXIST",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_PICTURE="WRONG_PICTURE",t}({}),d=function(t){return t.AUDIO="AUDIO",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_ARTIST="WRONG_ARTIST",t}({}),l=function(t){return t.FEATURED="FEATURED",t.MAIN="MAIN",t}({}),I=function(t){return t.PICKED_FROM_FAVORITES_ALBUMS="PICKED_FROM_FAVORITES_ALBUMS",t.PICKED_FROM_FAVORITES_ARTISTS="PICKED_FROM_FAVORITES_ARTISTS",t.PICKED_FROM_FAVORITES_TRACKS="PICKED_FROM_FAVORITES_TRACKS",t.PICKED_FROM_USERS_CREATED_PLAYLIST="PICKED_FROM_USERS_CREATED_PLAYLIST",t.RECENTLY_STREAMED_ON_REPEAT="RECENTLY_STREAMED_ON_REPEAT",t.UNKNOWN="UNKNOWN",t}({}),m=function(t){return t.ALL="ALL",t.NON_OFFICIAL="NON_OFFICIAL",t.OFFICIAL="OFFICIAL",t}({}),$=function(t){return t.DEFAULT="DEFAULT",t.DISCOVERY="DISCOVERY",t}({}),f=function(t){return t.ALL="ALL",t.CONSIDERED="CONSIDERED",t.NOT_CONSIDERED="NOT_CONSIDERED",t}({}),g=function(t){return t.CANCELLED="CANCELLED",t.ENDED="ENDED",t.PENDING="PENDING",t.STARTED="STARTED",t}({}),y=function(t){return t.ARTISTS_PICKER="ARTISTS_PICKER",t.IMPROVE="IMPROVE",t.MUSIC_TOGETHER="MUSIC_TOGETHER",t.WELCOME="WELCOME",t}({}),p=function(t){return t.HOMEPAGE="HOMEPAGE",t}({}),S=function(t){return t.ALBUM="ALBUM",t.ARTIST="ARTIST",t.FLOW_CONFIG="FLOW_CONFIG",t.LIVESTREAM="LIVESTREAM",t.PLAYLIST="PLAYLIST",t.PODCAST="PODCAST",t.TRACK="TRACK",t}({}),T=function(t){return t.FALLBACK="FALLBACK",t}({}),A=function(t){return t.CONCERT_DATE="CONCERT_DATE",t.RECOMMENDED="RECOMMENDED",t}({}),P=function(t){return t.DEEZER_SESSION="DEEZER_SESSION",t.DOCUMENTARY="DOCUMENTARY",t.INTERVIEW="INTERVIEW",t.REPLAY="REPLAY",t.TRAILER="TRAILER",t}({});const C=i.J1`
	fragment PictureXSmall on Picture {
		id
		xxx_small: urls(pictureRequest: {width: 40, height: 40})
		explicitStatus
	}
`,v=i.J1`
	fragment PlaylistAssistantTrack on Track {
		id
		title
		album {
			id
			displayTitle
			cover {
				...PictureXSmall
			}
		}
		contributors {
			edges {
				node {
					... on Artist {
						id
						name
					}
				}
			}
		}
		duration
		media {
			id
		}
		isExplicit
	}
	${C}
`,h=i.J1`
	fragment PictureMedium on Picture {
		id
		medium: urls(pictureRequest: {width: 264, height: 264})
		explicitStatus
	}
`,E=i.J1`
	fragment FlowConfigClusterConfiguration on FlowConfigClusterConfiguration {
		id
		isEnabled
		isEditedByUser
		cluster {
			id
			title
			artists {
				id
				name
				picture {
					...PictureMedium
				}
			}
		}
	}
	${h}
`,b=i.J1`
	fragment PictureSmall on Picture {
		id
		small: urls(pictureRequest: {height: 100, width: 100})
		explicitStatus
	}
`,F=i.J1`
	fragment PictureLarge on Picture {
		id
		large: urls(pictureRequest: {width: 500, height: 500})
		explicitStatus
	}
`,L=i.J1`
	fragment PlaylistBase on Playlist {
		id
		picture {
			...PictureSmall
			...PictureMedium
			...PictureLarge
		}
		title
	}
	${b}
	${h}
	${F}
`,k=i.J1`
	fragment PlaylistInfo on Playlist {
		...PlaylistBase
		description
		isPrivate
		isCollaborative
		defaultPicture {
			id
			...PictureSmall
			...PictureMedium
		}
	}
	${L}
	${b}
	${h}
`,R=i.J1`
	fragment SynchronizedLines on Lyrics {
		id
		synchronizedLines {
			lrcTimestamp
			line
			lineTranslated
			milliseconds
			duration
		}
	}
`,J=i.J1`
	fragment SynchronizedWordByWordLines on Lyrics {
		id
		synchronizedWordByWordLines {
			start
			end
			words {
				start
				end
				word
			}
		}
	}
`,N=i.J1`
	fragment SidebarPlaylistsInfo on Playlist {
		isFromFavoriteTracks
		isCollaborative
		id
		title
		owner {
			id
			name
		}
		picture {
			...PictureSmall
		}
	}
	${b}
`,O=i.J1`
	fragment AlbumSearchHistory on Album {
		id
		displayTitle
		contributors {
			edges {
				node {
					... on Artist {
						id
						name
					}
				}
			}
		}
		cover {
			...PictureSmall
		}
	}
	${b}
`,q=i.J1`
	fragment ArtistSearchHistory on Artist {
		id
		name
		fansCount
		picture {
			...PictureSmall
		}
	}
	${b}
`,_=i.J1`
	fragment EpisodeSearchHistory on PodcastEpisode {
		id
		title
		publicationDate
		podcast {
			id
			displayTitle
			cover {
				...PictureSmall
			}
		}
	}
	${b}
`,D=i.J1`
	fragment LiveStreamSearchHistory on Livestream {
		id
		name
		isOnStream
		cover {
			...PictureSmall
		}
	}
	${b}
`,x=i.J1`
	fragment PlaylistSearchHistory on Playlist {
		id
		title
		owner {
			id
			name
		}
		picture {
			...PictureSmall
		}
	}
	${b}
`,w=i.J1`
	fragment PodcastSearchHistory on Podcast {
		id
		displayTitle
		description
		cover {
			...PictureSmall
		}
	}
	${b}
`,M=i.J1`
	fragment TrackSearchHistory on Track {
		id
		title
		contributors {
			edges {
				node {
					... on Artist {
						id
						name
					}
				}
			}
		}
		album {
			id
			displayTitle
			cover {
				...PictureSmall
			}
		}
	}
	${b}
`,B=i.J1`
	fragment AlbumBase on Album {
		id
		displayTitle
		cover {
			...PictureSmall
			...PictureMedium
			...PictureLarge
		}
		releaseDate
		isFavorite
		isExplicit
	}
	${b}
	${h}
	${F}
`,U=i.J1`
	fragment AlbumContributors on Album {
		contributors {
			edges {
				cursor
				roles
				node {
					... on Artist {
						id
						name
						picture {
							...PictureSmall
							...PictureMedium
							...PictureLarge
						}
						isFavorite
						fansCount
					}
				}
			}
		}
	}
	${b}
	${h}
	${F}
`,H=i.J1`
	fragment AlbumMasthead on Album {
		...AlbumBase
		...AlbumContributors
		duration
		fansCount
		hasIdentifiedAIContent
	}
	${B}
	${U}
`,G=i.J1`
	fragment ArtistConcert on Artist {
		concerts(first: 1) {
			edges {
				node {
					id
					name
					date
					location
				}
			}
		}
	}
`,W=i.J1`
	fragment ArtistLiveEvents on Artist {
		liveEvents(
			first: $liveEventsFirst
			types: [CONCERT, FESTIVAL]
			statuses: [PENDING]
		) {
			edges {
				node {
					id
					name
					startDate
					cityName
					countryCode
					types {
						isConcert
						isFestival
						isLivestreamConcert
						isLivestreamFestival
					}
					venue
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
`,K=i.J1`
	fragment ArtistLiveEventsByProximity on Artist {
		liveEventsByProximity(first: $liveEventsByProximityFirst) {
			edges {
				node {
					id
					name
					startDate
					cityName
					countryCode
					types {
						isConcert
						isFestival
						isLivestreamConcert
						isLivestreamFestival
					}
					venue
				}
			}
		}
	}
`,V=i.J1`
	fragment ArtistBase on Artist {
		id
		name
		fansCount
		hasSmartRadio
		isFavorite
		picture {
			...PictureSmall
			...PictureMedium
			...PictureLarge
		}
	}
	${b}
	${h}
	${F}
`,z=i.J1`
	fragment ArtistBio on Artist {
		bio {
			full
		}
	}
`,Y=i.J1`
	fragment ArtistSocial on Artist {
		social {
			twitter
			facebook
			website
		}
	}
`,Q=i.J1`
	fragment ArtistMasthead on Artist {
		...ArtistBase
		...ArtistBio
		...ArtistSocial
		onTour
		status
	}
	${V}
	${z}
	${Y}
`,X=i.J1`
	fragment SearchArtist on Artist {
		id
		isFavorite
		name
		fansCount
		picture {
			...PictureLarge
		}
	}
	${F}
`,j=i.J1`
	fragment BestResultArtist on Artist {
		...SearchArtist
		hasSmartRadio
		hasTopTracks
	}
	${X}
`,Z=i.J1`
	fragment SearchAlbum on Album {
		id
		displayTitle
		isFavorite
		releaseDateAlbum: releaseDate
		isExplicitAlbum: isExplicit
		cover {
			...PictureLarge
		}
		contributors {
			edges {
				roles
				node {
					... on Artist {
						id
						name
					}
				}
			}
		}
		tracksCount
	}
	${F}
`,tt=i.J1`
	fragment SearchChannel on Channel {
		id
		picture {
			...PictureLarge
		}
		logoAsset {
			id
			large: urls(uiAssetRequest: {width: 500, height: 0})
		}
		name
		slug
		url {
			webUrl
		}
		backgroundColor
	}
	${F}
`,et=i.J1`
	fragment SearchFlowConfig on FlowConfig {
		id
		title
		visuals {
			dynamicPageIcon {
				id
				large: urls(uiAssetRequest: {width: 500, height: 500})
			}
		}
	}
`,rt=i.J1`
	fragment SearchLivestream on Livestream {
		id
		name
		cover {
			...PictureLarge
		}
	}
	${F}
`,it=i.J1`
	fragment SearchPlaylist on Playlist {
		id
		title
		isFavorite
		estimatedTracksCount
		fansCount
		picture {
			...PictureLarge
		}
		owner {
			id
			name
		}
	}
	${F}
`,st=i.J1`
	fragment SearchPodcast on Podcast {
		id
		displayTitle
		isPodcastFavorite: isFavorite
		cover {
			...PictureLarge
		}
		isExplicit
		rawEpisodes
	}
	${F}
`,nt=i.J1`
	fragment SearchPodcastEpisode on PodcastEpisode {
		id
		title
		description
		duration
		releaseDate
		media {
			url
		}
		podcast {
			id
			displayTitle
			isExplicit
			cover {
				...PictureSmall
				...PictureLarge
			}
			rights {
				ads {
					available
				}
				sub {
					available
				}
			}
		}
	}
	${b}
	${F}
`,at=i.J1`
	fragment SearchUser on User {
		id
		name
		picture {
			...PictureLarge
		}
	}
	${F}
`,ot=i.J1`
	fragment TrackLyrics on Track {
		id
		lyrics {
			id
			copyright
			synchronizedLines {
				line
			}
			text
			writers
		}
	}
`,ct=i.J1`
	fragment TrackContributors on Track {
		contributors {
			edges {
				cursor
				roles
				node {
					... on Artist {
						id
						name
						picture {
							...PictureSmall
							...PictureMedium
							...PictureLarge
						}
					}
				}
			}
		}
	}
	${b}
	${h}
	${F}
`,ut=i.J1`
	fragment TrackBase on Track {
		id
		title
		...TrackContributors
		album {
			id
			displayTitle
			cover {
				...PictureSmall
				...PictureMedium
				...PictureLarge
			}
		}
	}
	${ct}
	${b}
	${h}
	${F}
`,dt=i.J1`
	fragment TrackMasthead on Track {
		...TrackBase
		duration
		isExplicit
	}
	${ut}
`,lt=i.J1`
	fragment TrackRelatedAlbums on Track {
		relatedTracks(first: $relatedAlbumsFirst) {
			edges {
				node {
					...TrackBase
					album {
						...AlbumBase
						id
						contributors(first: $relatedAlbumsContributorsFirst) {
							edges {
								node {
									... on Artist {
										id
										name
									}
								}
							}
						}
						releaseDate
					}
				}
			}
		}
	}
	${ut}
	${B}
`,It=i.J1`
	fragment LyricsSynchronizedLines on LyricsSynchronizedLine {
		lrcTimestamp
		line
		lineTranslated
		milliseconds
		duration
	}
`,mt=i.J1`
	fragment Lyrics on Lyrics {
		id
		copyright
		text
		writers
		synchronizedLines {
			...LyricsSynchronizedLines
		}
	}
	${It}
`,$t=i.J1`
	fragment SynchronizedTrackLyrics on Track {
		id
		lyrics {
			...Lyrics
		}
		album {
			cover {
				...PictureSmall
				...PictureMedium
				...PictureLarge
			}
		}
	}
	${mt}
	${b}
	${h}
	${F}
`,ft=i.J1`
	fragment TableTrack on Track {
		id
		title
		duration
		popularity
		isExplicit
		lyrics {
			id
		}
		media {
			id
			rights {
				ads {
					available
					availableAfter
				}
				sub {
					available
					availableAfter
				}
			}
		}
		album {
			id
			displayTitle
			cover {
				...PictureXSmall
				...PictureLarge
			}
		}
		contributors {
			edges {
				node {
					... on Artist {
						id
						name
					}
				}
			}
		}
	}
	${C}
	${F}
`,gt=i.J1`
	fragment PinDrawerAlbum on Album {
		id
		contributors {
			edges {
				node {
					... on Artist {
						id
						name
					}
				}
			}
		}
		...AlbumBase
		__typename
	}
	${B}
`,yt=i.J1`
	fragment PinDrawerPlaylist on Playlist {
		id
		owner {
			id
			name
		}
		...PlaylistBase
		__typename
	}
	${L}
`,pt=i.J1`
	fragment PinDrawerTrack on Track {
		id
		title
		album {
			id
			displayTitle
			contributors {
				edges {
					node {
						... on Artist {
							id
							name
						}
					}
				}
			}
			cover {
				...PictureSmall
			}
		}
		__typename
	}
	${b}
`,St=i.J1`
	fragment PinItem on QuickAccessItem {
		... on Album {
			id
			...AlbumBase
		}
		... on Artist {
			id
			...ArtistBase
		}
		... on Playlist {
			id
			...PlaylistBase
		}
		... on Podcast {
			id
			displayTitle
			cover {
				...PictureSmall
			}
		}
		... on FlowConfig {
			id
			title
			visuals {
				dynamicPageIcon {
					id
					small: urls(uiAssetRequest: {height: 100, width: 100})
				}
			}
		}
		... on Livestream {
			id
			name
			cover {
				...PictureSmall
			}
		}
		... on Track {
			id
			title
			album {
				id
				cover {
					...PictureSmall
				}
			}
		}
	}
	${B}
	${V}
	${L}
	${b}
`,Tt=i.J1`
	query SimpleStory($storyId: String!) {
		me {
			simpleStory(storyId: $storyId) {
				storyId
				placeholders {
					key
					value
				}
			}
		}
	}
`;function At(t){const e={...s,...t};return i.IT(Tt,e)}const Pt=i.J1`
	query SearchResult($city: String!) {
		search(query: $city) {
			results {
				cities {
					edges {
						node {
							name
							countryCode
							coordinates {
								latitude
								longitude
							}
						}
					}
				}
			}
		}
	}
`;function Ct(t){const e={...s,...t};return i._l(Pt,e)}const vt=i.J1`
	mutation SubscribeToLiveEventNotification($eventId: String!) {
		subscribeToLiveEventNotification(liveEventId: $eventId) {
			status
			liveEvent {
				id
				hasSubscribedToNotification
			}
		}
	}
`;function ht(t){const e={...s,...t};return i.n_(vt,e)}const Et=i.J1`
	mutation UnsubscribeToLiveEventNotification($eventId: String!) {
		unsubscribeToLiveEventNotification(liveEventId: $eventId) {
			status
			liveEvent {
				id
				hasSubscribedToNotification
			}
		}
	}
`;function bt(t){const e={...s,...t};return i.n_(Et,e)}const Ft=i.J1`
	query LiveEventCard(
		$eventId: String!
		$imageHeight: Int!
		$imageWidth: Int!
	) {
		liveEvent(liveEventId: $eventId) {
			id
			name
			startDate
			status
			live {
				id
				externalUrl {
					url
				}
			}
			videos(types: [TRAILER]) {
				edges {
					node {
						id
						externalUrl {
							url
						}
						type
					}
				}
			}
			assets {
				eventCardImageWeb {
					id
					urls(pictureRequest: {height: $imageHeight, width: $imageWidth})
				}
			}
			hasSubscribedToNotification
		}
	}
`;function Lt(t){const e={...s,...t};return i.IT(Ft,e)}const kt=i.J1`
	query ArtistsPickerOnboardingStepInfo($context: OnboardingContextInput) {
		onboardingSteps(context: $context) {
			artistsPicker {
				minimumArtistsToPick
				maximumArtistsToPick
				displayGenreBar
			}
		}
	}
`;function Rt(t){const e={...s,...t};return i.IT(kt,e)}const Jt=i.J1`
	mutation ValidateOnboardingArtistsPickerStep(
		$artistIds: [String!]!
		$context: OnboardingContextInput!
	) {
		validateOnboardingArtistsPickerStep(
			input: {artistIds: $artistIds}
			context: $context
		) {
			status
			onboarding {
				currentStep
				shouldBeOnboarded
			}
		}
	}
`;function Nt(t){const e={...s,...t};return i.n_(Jt,e)}const Ot=i.J1`
	query ImportLibraryOnboardingStepInfo {
		onboardingSteps {
			importLibrary {
				title
				skipCTA
				importer
				supportedServices
			}
		}
	}
`;function qt(t){const e={...s,...t};return i.IT(Ot,e)}const _t=i.J1`
	mutation ValidateOnboardingLibraryImportStep(
		$hasSkipped: Boolean!
		$context: OnboardingContextInput!
	) {
		validateOnboardingImportLibraryStep(
			input: {hasSkipped: $hasSkipped}
			context: $context
		) {
			status
			onboarding {
				currentStep
				shouldBeOnboarded
			}
		}
	}
`;function Dt(t){const e={...s,...t};return i.n_(_t,e)}const xt=i.J1`
	query PlaylistAssistantRecommendedTracks($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			id
			playlistAssistant {
				sources {
					id
					title
					tracks {
						...PlaylistAssistantTrack
					}
				}
			}
		}
	}
	${v}
`;function wt(t){const e={...s,...t};return i.IT(xt,e)}const Mt=i.J1`
	query SearchTracks($value: String!, $first: Int!) {
		search(query: $value) {
			results {
				tracks(first: $first) {
					edges {
						node {
							...PlaylistAssistantTrack
						}
					}
				}
			}
		}
	}
	${v}
`;function Bt(t){const e={...s,...t};return i.IT(Mt,e)}const Ut=i.J1`
	mutation ReportIssueOfCatalog($input: CatalogIssueInput!) {
		reportCatalogIssue(input: $input) {
			... on ReportCatalogIssueMutationOutput {
				success
			}
		}
	}
`;function Ht(t){const e={...s,...t};return i.n_(Ut,e)}const Gt=i.J1`
	mutation UpdatePalette($accent: String!) {
		updatePalette(accentIdentifier: $accent) {
			__typename
			... on PaletteUpdateMutationOutput {
				palette {
					id
					accentIdentifier
				}
			}
			... on PaletteUpdateMutationError {
				isInvalidIdentifier
			}
		}
	}
`;function Wt(t){const e={...s,...t};return i.n_(Gt,e)}const Kt=i.J1`
	query GetHasPaletteSelector {
		permissions {
			access {
				hasPaletteSelector
			}
		}
	}
`;function Vt(t){const e={...s,...t};return i.IT(Kt,e)}const zt=i.J1`
	query GetPalette {
		theming {
			id
			palette {
				id
				accentIdentifier
			}
		}
	}
`;function Yt(t){const e={...s,...t};return i.IT(zt,e)}const Qt=i.J1`
	mutation ResetFlowConfig($flowConfigId: String!) {
		resetFlowConfigClusters(input: {flowConfigId: $flowConfigId}) {
			... on ResetFlowConfigClustersError {
				isInvalidFlowConfigId
			}
		}
	}
`;function Xt(t){const e={...s,...t};return i.n_(Qt,e)}const jt=i.J1`
	mutation UpdateFlowConfig(
		$flowConfigId: String!
		$clusters: [UpdateFlowConfigClusterConfigurationInput!]!
	) {
		updateFlowConfigClusters(
			input: {flowConfigId: $flowConfigId, clusters: $clusters}
		) {
			... on UpdateFlowConfigClustersError {
				isInvalidFlowConfigId
			}
		}
	}
`;function Zt(t){const e={...s,...t};return i.n_(jt,e)}const te=i.J1`
	query FlowConfig(
		$flowConfigId: String!
		$filter: FlowConfigClusterFilter = ALL
		$first: Int!
		$cursor: String
	) {
		flowConfig(flowConfigId: $flowConfigId) {
			id
			title
			clusterConfigurations(filter: $filter, after: $cursor, first: $first) {
				pageInfo {
					endCursor
					hasNextPage
				}
				edges {
					node {
						...FlowConfigClusterConfiguration
					}
				}
			}
		}
	}
	${E}
`;function ee(t){const e={...s,...t};return i.IT(te,e)}const re=i.J1`
	query FlowTunerHeader($flowConfigId: String!) {
		flowConfig(flowConfigId: $flowConfigId) {
			id
			title
			visuals {
				dynamicPageIcon {
					id
					urls(uiAssetRequest: {height: 100, width: 100})
				}
			}
		}
	}
`;function ie(t){const e={...s,...t};return i.IT(re,e)}const se=i.J1`
	mutation CreatePlaylist($input: PlaylistCreateMutationInput!) {
		createPlaylist(input: $input) {
			playlist {
				...PlaylistInfo
			}
		}
	}
	${k}
`;function ne(t){const e={...s,...t};return i.n_(se,e)}const ae=i.J1`
	mutation ResetPlaylistCover($input: ResetDefaultPlaylistCoverInput!) {
		resetDefaultPlaylistCover(input: $input) {
			... on ResetDefaultPlaylistCoverMutationOutput {
				playlist {
					...PlaylistInfo
				}
			}
			... on ResetDefaultPlaylistCoverMutationError {
				playlistNotFound
				userIsNotPlaylistOwner
				isLovedTracksPlaylist
			}
		}
	}
	${k}
`;function oe(t){const e={...s,...t};return i.n_(ae,e)}const ce=i.J1`
	mutation UpdatePlaylist($input: PlaylistUpdateMutationInput!) {
		updatePlaylist(input: $input) {
			playlist {
				...PlaylistInfo
			}
		}
	}
	${k}
`;function ue(t){const e={...s,...t};return i.n_(ce,e)}const de=i.J1`
	query PlaylistAssistant($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			...PlaylistInfo
		}
	}
	${k}
`;function le(t){const e={...s,...t};return i.IT(de,e)}function Ie(t){const e={...s,...t};return i._l(de,e)}const me=i.J1`
	query GetLyrics($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				text
				...SynchronizedWordByWordLines
				...SynchronizedLines
				licence
				copyright
				writers
			}
		}
	}
	${J}
	${R}
`;function $e(t){const e={...s,...t};return i.IT(me,e)}i.J1`
	query SynchronizedLyricsLines($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				...SynchronizedLines
			}
		}
	}
	${R}
`,i.J1`
	query SynchronizedLyricsWordByWord($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				...SynchronizedWordByWordLines
			}
		}
	}
	${J}
`;const fe=i.J1`
	query TrackCover($trackId: String!) {
		track(trackId: $trackId) {
			id
			album {
				id
				cover {
					...PictureLarge
				}
			}
		}
	}
	${F}
`;function ge(t){const e={...s,...t};return i.IT(fe,e)}i.J1`
	query UnsynchronizedLyricsLines($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				text
			}
		}
	}
`;const ye=i.J1`
	query CustomizableFlowConfig($flowConfigId: String!) {
		flowConfig(flowConfigId: $flowConfigId) {
			id
			hasCustomizableClusterConfigurations
		}
	}
`;function pe(t){const e={...s,...t};return i.IT(ye,e)}const Se=i.J1`
	query Tuner {
		me {
			id
			flowTuner {
				discoveryTuner
			}
		}
	}
`;function Te(t){const e={...s,...t};return i.UX(Se,e)}const Ae=i.J1`
	mutation AddTracksToPlaylist($input: PlaylistAddTracksMutationInput!) {
		addTracksToPlaylist(input: $input) {
			... on PlaylistAddTracksOutput {
				addedTrackIds
				duplicatedTrackIds
			}
		}
	}
`;function Pe(t){const e={...s,...t};return i.n_(Ae,e)}i.J1`
	query SidebarInfo($first: Int!) {
		me {
			userFavorites {
				estimatedTracksCount
				estimatedAlbumsCount
				albums(first: $first) {
					edges {
						node {
							id
							displayTitle
							cover {
								...PictureMedium
							}
						}
					}
				}
				estimatedArtistsCount
				artists(first: $first) {
					edges {
						node {
							id
							name
							picture {
								...PictureMedium
							}
						}
					}
				}
				estimatedPodcastsCount
				podcasts(first: $first) {
					edges {
						node {
							id
							displayTitle
							cover {
								...PictureMedium
							}
						}
					}
				}
			}
		}
	}
	${h}
`;const Ce=i.J1`
	query SidebarPlaylistsInfo($first: Int!) {
		me {
			id
			playlists(sort: {by: LAST_MODIFICATION_DATE, order: DESC}) {
				edges {
					node {
						lastModificationDate
						...SidebarPlaylistsInfo
					}
				}
			}
			userFavorites {
				playlists(first: $first) {
					edges {
						favoritedAt
						node {
							...SidebarPlaylistsInfo
						}
					}
				}
			}
		}
	}
	${N}
`;function ve(t){const e={...s,...t};return i.IT(Ce,e)}const he=i.J1`
	query IsPlaylistBlindtestable($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			id
			isBlindTestable
		}
	}
`;function Ee(t){const e={...s,...t};return i.IT(he,e)}function be(t){const e={...s,...t};return i.UX(he,e)}const Fe=i.J1`
	mutation ClearSearchHistory {
		clearSearchSuccessResult {
			status
		}
	}
`;function Le(t){const e={...s,...t};return i.n_(Fe,e)}const ke=i.J1`
	query History($first: Int, $cursor: String) {
		me {
			id
			searchHistory {
				successResults(first: $first, after: $cursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							... on Track {
								...TrackSearchHistory
							}
							... on PodcastEpisode {
								...EpisodeSearchHistory
							}
							... on Livestream {
								...LiveStreamSearchHistory
							}
							... on Artist {
								...ArtistSearchHistory
							}
							... on Playlist {
								...PlaylistSearchHistory
							}
							... on Album {
								...AlbumSearchHistory
							}
							... on Podcast {
								...PodcastSearchHistory
							}
						}
					}
				}
			}
		}
	}
	${M}
	${_}
	${D}
	${q}
	${x}
	${O}
	${w}
`;function Re(t){const e={...s,...t};return i.IT(ke,e)}function Je(t){const e={...s,...t};return i._l(ke,e)}const Ne=i.J1`
	query AlbumFull($albumId: String!) {
		album(albumId: $albumId) {
			...AlbumMasthead
		}
	}
	${H}
`;function Oe(t){const e={...s,...t};return i.IT(Ne,e)}const qe=i.J1`
	query AlternativeAlbumVersions($albumId: String!) {
		album(albumId: $albumId) {
			alternativeVersions {
				edges {
					node {
						...AlbumBase
						...AlbumContributors
					}
				}
			}
		}
	}
	${B}
	${U}
`;function _e(t){const e={...s,...t};return i.IT(qe,e)}const De=i.J1`
	query ArtistBiography($artistId: String!) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistBio
		}
	}
	${z}
`;function xe(t){const e={...s,...t};return i.IT(De,e)}const we=i.J1`
	query ArtistCuratedPlaylists(
		$artistId: String!
		$curatedPlaylistFirst: Int!
	) {
		artist(artistId: $artistId) {
			id
			playlists {
				curatedPlaylists(first: $curatedPlaylistFirst) {
					edges {
						node {
							...PlaylistBase
							fansCount
							owner {
								id
								name
							}
							estimatedTracksCount
							isPrivate
							isCollaborative
						}
					}
				}
			}
		}
	}
	${L}
`;function Me(t){const e={...s,...t};return i.IT(we,e)}const Be=i.J1`
	query ArtistDiscographyByType(
		$artistId: String!
		$nb: Int!
		$roles: [ContributorRoles!]!
		$types: [AlbumTypeInput!]!
		$subType: AlbumSubTypeInput
		$mode: DiscographyMode
		$cursor: String
		$order: AlbumOrder
	) {
		artist(artistId: $artistId) {
			id
			albums(
				after: $cursor
				first: $nb
				onlyCanonical: true
				roles: $roles
				types: $types
				subType: $subType
				mode: $mode
				order: $order
			) {
				edges {
					cursor
					node {
						...AlbumBase
						...AlbumContributors
					}
				}
				pageInfo {
					hasNextPage
					hasPreviousPage
					startCursor
					endCursor
				}
			}
		}
	}
	${B}
	${U}
`;function Ue(t){const e={...s,...t};return i.IT(Be,e)}const He=i.J1`
	query ArtistFull(
		$artistId: String!
		$relatedArtistFirst: Int!
		$liveEventsFirst: Int!
	) {
		artist(artistId: $artistId) {
			...ArtistMasthead
			relatedArtists: relatedArtist(first: $relatedArtistFirst) {
				edges {
					cursor
					node {
						...ArtistBase
					}
				}
				pageInfo {
					hasNextPage
					hasPreviousPage
					startCursor
					endCursor
				}
			}
			liveEvents(
				first: $liveEventsFirst
				types: [CONCERT, FESTIVAL]
				statuses: [PENDING]
			) {
				edges {
					node {
						id
					}
				}
				pageInfo {
					endCursor
					hasNextPage
				}
			}
		}
		me {
			userFavorites {
				byArtist(artistId: $artistId) {
					estimatedTracksCount
				}
			}
		}
	}
	${Q}
	${V}
`;function Ge(t){const e={...s,...t};return i.IT(He,e)}const We=i.J1`
	query ArtistRelatedArtists(
		$artistId: String!
		$relatedArtistFirst: Int!
		$cursor: String
	) {
		artist(artistId: $artistId) {
			id
			relatedArtists: relatedArtist(
				first: $relatedArtistFirst
				after: $cursor
			) {
				edges {
					cursor
					node {
						...ArtistBase
					}
				}
				pageInfo {
					hasNextPage
					hasPreviousPage
					startCursor
					endCursor
				}
			}
		}
	}
	${V}
`;function Ke(t){const e={...s,...t};return i.IT(We,e)}const Ve=i.J1`
	query ArtistRelatedPlaylists(
		$artistId: String!
		$relatedPlaylistFirst: Int!
		$cursor: String
	) {
		artist(artistId: $artistId) {
			id
			playlists {
				relatedPlaylists(first: $relatedPlaylistFirst, after: $cursor) {
					edges {
						cursor
						node {
							...PlaylistBase
							fansCount
							owner {
								id
								name
							}
							estimatedTracksCount
							isPrivate
							isCollaborative
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${L}
`;function ze(t){const e={...s,...t};return i.IT(Ve,e)}i.J1`
	query ConcertList($artistId: String!, $perPage: Int = 70) {
		artist(artistId: $artistId) {
			id
			concerts(first: $perPage) {
				edges {
					node {
						id
						name
						date
						location
					}
				}
			}
		}
	}
`,i.J1`
	query LastConcert($artistId: String!) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistConcert
		}
	}
	${G}
`;const Ye=i.J1`
	query LastLiveEvent(
		$artistId: String!
		$liveEventsByProximityFirst: Int = 1
	) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistLiveEventsByProximity
		}
	}
	${K}
`;function Qe(t){const e={...s,...t};return i.IT(Ye,e)}const Xe=i.J1`
	query LiveEventList($artistId: String!, $liveEventsFirst: Int!) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistLiveEvents
		}
	}
	${W}
`;function je(t){const e={...s,...t};return i.IT(Xe,e)}const Ze=i.J1`
	query PersonalFavoriteByArtist(
		$artistId: String!
		$first: Int!
		$cursor: String
	) {
		me {
			userFavorites {
				byArtist(artistId: $artistId) {
					tracks(after: $cursor, first: $first) {
						edges {
							cursor
							favoritedAt
							node {
								...TableTrack
							}
						}
						pageInfo {
							hasNextPage
							endCursor
						}
					}
				}
			}
		}
	}
	${ft}
`;function tr(t){const e={...s,...t};return i.IT(Ze,e)}const er=i.J1`
	query PersonalFavoriteCount($artistId: String!) {
		artist(artistId: $artistId) {
			picture {
				...PictureSmall
			}
		}
		me {
			userFavorites {
				byArtist(artistId: $artistId) {
					estimatedTracksCount
				}
			}
		}
	}
	${b}
`;function rr(t){const e={...s,...t};return i.IT(er,e)}const ir=i.J1`
	query LiveEvent(
		$eventId: String!
		$contributorsFirst: Int = 12
		$albumFirst: Int = 12
	) {
		liveEvent(liveEventId: $eventId) {
			id
			name
			startDate
			status
			venue
			cityName
			hasSubscribedToNotification
			sources {
				coBranding {
					logoAsset {
						lightThemeUIAsset {
							id
							urls(uiAssetRequest: {width: 730, height: 182})
						}
						darkThemeUIAsset {
							id
							urls(uiAssetRequest: {width: 730, height: 182})
						}
					}
				}
				defaultUrl
			}
			live {
				id
				externalUrl {
					url
				}
			}
			types {
				isConcert
				isFestival
				isLivestreamConcert
				isLivestreamFestival
			}
			videos(types: [TRAILER]) {
				edges {
					node {
						id
						externalUrl {
							url
						}
						type
					}
				}
			}
			contributors(first: $contributorsFirst) {
				edges {
					concertContributorMetadata {
						roles {
							isMain
							isSupport
						}
						performanceOrder
					}
					cursor
					node {
						... on Artist {
							id
							name
							isFavorite
							fansCount
							albums(
								types: [ALBUM]
								order: RELEASE_DATE
								mode: OFFICIAL
								roles: [MAIN]
								first: $albumFirst
								after: null
							) {
								edges {
									cursor
									node {
										id
										displayTitle
										releaseDate
										cover {
											md5
											...PictureSmall
											...PictureMedium
											...PictureLarge
										}
									}
								}
							}
							picture {
								md5
								...PictureSmall
								...PictureMedium
								...PictureLarge
							}
							url {
								webUrl
								deepLink
							}
							isFavorite
							fansCount
						}
					}
				}
				pageInfo {
					hasNextPage
					startCursor
					hasPreviousPage
				}
			}
		}
	}
	${b}
	${h}
	${F}
`;function sr(t){const e={...s,...t};return i.IT(ir,e)}i.J1`
	query LiveEventsRecommended(
		$longitude: Float = null
		$latitude: Float = null
		$first: Int
		$after: String
		$excludeOrigins: [RecommendedLiveEventExcludeOriginsInput!] = null
		$order: RecommendedLiveEventsOrderInput = null
	) {
		liveEventsRecommended(
			longitude: $longitude
			latitude: $latitude
			first: $first
			after: $after
			excludeOrigins: $excludeOrigins
			order: $order
		) {
			pageInfo {
				endCursor
				hasNextPage
			}
			edges {
				cursor
				node {
					id
					types {
						isConcert
						isFestival
						isLivestreamConcert
						isLivestreamFestival
					}
					startDate
					status
					venue
					hasSubscribedToNotification
					name
					cityName
					sources {
						songkick {
							id
						}
					}
					contributors(first: 10, after: null) {
						edges {
							cursor
							node {
								... on Artist {
									id
									name
									fansCount
									isFavorite
									picture {
										...PictureSmall
										...PictureMedium
										...PictureLarge
									}
									url {
										webUrl
										deepLink
									}
								}
							}
							concertContributorMetadata {
								roles {
									isMain
								}
							}
						}
						pageInfo {
							hasNextPage
							startCursor
							hasPreviousPage
							endCursor
						}
					}
				}
			}
		}
	}
	${b}
	${h}
	${F}
`;const nr=i.J1`
	query LiveEventsRecommendedClusters(
		$longitude: Float = null
		$latitude: Float = null
		$first: Int
		$after: String
		$excludeOrigins: [RecommendedLiveEventsClustersExcludeOriginsInput!] = null
		$order: RecommendedLiveEventsClustersOrderInput = null
	) {
		liveEventsRecommendedClusters(
			longitude: $longitude
			latitude: $latitude
			first: $first
			after: $after
			excludeOrigins: $excludeOrigins
			order: $order
		) {
			pageInfo {
				endCursor
				hasNextPage
			}
			edges {
				cursor
				node {
					liveEvents(first: 10, after: null) {
						edges {
							cursor
							node {
								id
								types {
									isConcert
									isFestival
									isLivestreamConcert
									isLivestreamFestival
								}
								name
								startDate
								status
								venue
								cityName
								hasSubscribedToNotification
								contributors(first: 10, after: null) {
									edges {
										cursor
										node {
											... on Artist {
												id
												name
												fansCount
												isFavorite
												picture {
													...PictureSmall
													...PictureMedium
													...PictureLarge
												}
												url {
													webUrl
													deepLink
												}
											}
										}
										concertContributorMetadata {
											roles {
												isMain
											}
										}
									}
									pageInfo {
										hasNextPage
										startCursor
										hasPreviousPage
										endCursor
									}
								}
							}
						}
					}
				}
			}
		}
	}
	${b}
	${h}
	${F}
`;function ar(t){const e={...s,...t};return i.IT(nr,e)}const or=i.J1`
	query ArtistExclusionsTab($artistFirst: Int, $artistCursor: String) {
		me {
			id
			bannedFromRecommendation {
				artists(first: $artistFirst, after: $artistCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							...ArtistBase
							isBannedFromRecommendation
						}
					}
				}
				estimatedArtistsCount
			}
		}
	}
	${V}
`;function cr(t){const e={...s,...t};return i.IT(or,e)}const ur=i.J1`
	query TrackExclusionsTab($trackFirst: Int, $trackCursor: String) {
		me {
			id
			bannedFromRecommendation {
				tracks(first: $trackFirst, after: $trackCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							...TableTrack
							isBannedFromRecommendation
						}
						bannedAt
					}
				}
				estimatedTracksCount
			}
		}
	}
	${ft}
`;function dr(t){const e={...s,...t};return i.IT(ur,e)}const lr=i.J1`
	query OthersFavorite($userId: String!) {
		user(userId: $userId) {
			id
			favorites {
				estimatedTracksCount
			}
		}
	}
`;function Ir(t){const e={...s,...t};return i.UX(lr,e)}const mr=i.J1`
	query PlaylistMasthead($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			...PlaylistBase
			description
			isCharts
			isCollaborative
			isPrivate
			isFromFavoriteTracks
		}
	}
	${L}
`;function $r(t){const e={...s,...t};return i.IT(mr,e)}const fr=i.J1`
	query RecommendationsIncludedArtistsTab(
		$artistFirst: Int
		$artistCursor: String
	) {
		me {
			id
			customizeRecommendations {
				artists(first: $artistFirst, after: $artistCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							...ArtistBase
							isBannedFromRecommendation
						}
						metadata {
							favoritedAt
						}
					}
				}
				estimatedArtistsCount
			}
		}
	}
	${V}
`;function gr(t){const e={...s,...t};return i.IT(fr,e)}const yr=i.J1`
	query RecommendationsIncludedTracksTab(
		$trackFirst: Int
		$trackCursor: String
	) {
		me {
			id
			customizeRecommendations {
				tracks(first: $trackFirst, after: $trackCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							...TableTrack
							isBannedFromRecommendation
						}
						metadata {
							trackOrigin
							addedAt
						}
					}
				}
			}
		}
	}
	${ft}
`;function pr(t){const e={...s,...t};return i.IT(yr,e)}const Sr=i.J1`
	mutation AddAlbumInSearchHistory($albumId: String!) {
		addAlbumInSearchSuccessResult(albumId: $albumId) {
			status
		}
	}
`;function Tr(t){const e={...s,...t};return i.n_(Sr,e)}const Ar=i.J1`
	mutation AddArtistInSearchHistory($artistId: String!) {
		addArtistInSearchSuccessResult(artistId: $artistId) {
			status
		}
	}
`;function Pr(t){const e={...s,...t};return i.n_(Ar,e)}const Cr=i.J1`
	mutation AddTrackInSearchHistory($trackId: String!) {
		addTrackInSearchSuccessResult(trackId: $trackId) {
			status
		}
	}
`;function vr(t){const e={...s,...t};return i.n_(Cr,e)}const hr=i.J1`
	mutation AddPlaylistInSearchHistory($playlistId: String!) {
		addPlaylistInSearchSuccessResult(playlistId: $playlistId) {
			status
		}
	}
`;function Er(t){const e={...s,...t};return i.n_(hr,e)}const br=i.J1`
	mutation AddPodcastInSearchHistory($podcastId: String!) {
		addPodcastInSearchSuccessResult(podcastId: $podcastId) {
			status
		}
	}
`;function Fr(t){const e={...s,...t};return i.n_(br,e)}const Lr=i.J1`
	mutation AddPodcastEpisodeInSearchHistory($episodeId: String!) {
		addPodcastEpisodeInSearchSuccessResult(episodeId: $episodeId) {
			status
		}
	}
`;function kr(t){const e={...s,...t};return i.n_(Lr,e)}const Rr=i.J1`
	mutation AddLivestreamInSearchHistory($livestreamId: String!) {
		addLivestreamInSearchSuccessResult(livestreamId: $livestreamId) {
			status
		}
	}
`;function Jr(t){const e={...s,...t};return i.n_(Rr,e)}const Nr=i.J1`
	query SearchAlbumsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				albums(first: $first, after: $cursor) {
					edges {
						node {
							...SearchAlbum
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${Z}
`;function Or(t){const e={...s,...t};return i.IT(Nr,e)}const qr=i.J1`
	query SearchArtistsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				artists(first: $first, after: $cursor) {
					edges {
						node {
							...SearchArtist
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${X}
`;function _r(t){const e={...s,...t};return i.IT(qr,e)}const Dr=i.J1`
	query SearchChannelsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				channels(first: $first, after: $cursor) {
					edges {
						node {
							...SearchChannel
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${tt}
`;function xr(t){const e={...s,...t};return i.IT(Dr,e)}const wr=i.J1`
	query SearchEpisodesTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				podcastEpisodes(first: $first, after: $cursor) {
					edges {
						node {
							...SearchPodcastEpisode
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${nt}
`;function Mr(t){const e={...s,...t};return i.IT(wr,e)}const Br=i.J1`
	query SearchFlowConfigsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				flowConfigs(first: $first, after: $cursor) {
					edges {
						node {
							...SearchFlowConfig
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${et}
`;function Ur(t){const e={...s,...t};return i.IT(Br,e)}const Hr=i.J1`
	query SearchFull($query: String!, $firstGrid: Int!, $firstList: Int!) {
		instantSearch(query: $query) {
			bestResult {
				__typename
				... on InstantSearchAlbumBestResult {
					album {
						...SearchAlbum
					}
				}
				... on InstantSearchArtistBestResult {
					artist {
						...BestResultArtist
					}
				}
				... on InstantSearchPlaylistBestResult {
					playlist {
						...SearchPlaylist
					}
				}
				... on InstantSearchPodcastBestResult {
					podcast {
						...SearchPodcast
					}
				}
				... on InstantSearchLivestreamBestResult {
					livestream {
						...SearchLivestream
					}
				}
				... on InstantSearchTrackBestResult {
					track {
						...TableTrack
					}
				}
				... on InstantSearchPodcastEpisodeBestResult {
					podcastEpisode {
						...SearchPodcastEpisode
					}
				}
			}
			results {
				artists(first: $firstGrid) {
					edges {
						node {
							...SearchArtist
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				albums(first: $firstGrid) {
					edges {
						node {
							...SearchAlbum
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				channels(first: $firstGrid) {
					edges {
						node {
							...SearchChannel
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				flowConfigs(first: $firstGrid) {
					edges {
						node {
							...SearchFlowConfig
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				livestreams(first: $firstGrid) {
					edges {
						node {
							...SearchLivestream
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				playlists(first: $firstGrid) {
					edges {
						node {
							...SearchPlaylist
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				podcasts(first: $firstGrid) {
					edges {
						node {
							...SearchPodcast
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				tracks(first: $firstList) {
					edges {
						node {
							...TableTrack
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				users(first: $firstGrid) {
					edges {
						node {
							...SearchUser
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				podcastEpisodes(first: $firstList) {
					edges {
						node {
							...SearchPodcastEpisode
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
			}
		}
	}
	${Z}
	${j}
	${it}
	${st}
	${rt}
	${ft}
	${nt}
	${X}
	${tt}
	${et}
	${at}
`;function Gr(t){const e={...s,...t};return i.IT(Hr,e)}const Wr=i.J1`
	query SearchLivestreamsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				livestreams(first: $first, after: $cursor) {
					edges {
						node {
							...SearchLivestream
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${rt}
`;function Kr(t){const e={...s,...t};return i.IT(Wr,e)}const Vr=i.J1`
	query SearchPlaylistsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				playlists(first: $first, after: $cursor) {
					edges {
						node {
							...SearchPlaylist
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${it}
`;function zr(t){const e={...s,...t};return i.IT(Vr,e)}const Yr=i.J1`
	query SearchPodcastsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				podcasts(first: $first, after: $cursor) {
					edges {
						node {
							...SearchPodcast
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${st}
`;function Qr(t){const e={...s,...t};return i.IT(Yr,e)}i.J1`
	query SearchTopResult($query: String!) {
		instantSearch(query: $query) {
			topResult {
				content {
					...SearchAlbum
					...SearchArtist
					...SearchPlaylist
					...SearchPodcast
					...SearchLivestream
				}
			}
		}
	}
	${Z}
	${X}
	${it}
	${st}
	${rt}
`;const Xr=i.J1`
	query SearchTracksTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				tracks(first: $first, after: $cursor) {
					edges {
						node {
							...TableTrack
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${ft}
`;function jr(t){const e={...s,...t};return i.IT(Xr,e)}const Zr=i.J1`
	query SearchUsersTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				users(first: $first, after: $cursor) {
					edges {
						node {
							...SearchUser
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${at}
`;function ti(t){const e={...s,...t};return i.IT(Zr,e)}i.J1`
	query SynchronizedTrackLyrics($trackId: String!) {
		track(trackId: $trackId) {
			...SynchronizedTrackLyrics
		}
	}
	${$t}
`;const ei=i.J1`
	query TrackFull(
		$trackId: String!
		$relatedAlbumsFirst: Int
		$relatedAlbumsContributorsFirst: Int
	) {
		track(trackId: $trackId) {
			...TrackMasthead
			...TrackLyrics
			...TrackRelatedAlbums
		}
	}
	${dt}
	${ot}
	${lt}
`;function ri(t){const e={...s,...t};return i.IT(ei,e)}const ii=i.J1`
	query TrackLyrics($trackId: String!) {
		track(trackId: $trackId) {
			...TrackLyrics
		}
	}
	${ot}
`;function si(t){const e={...s,...t};return i.IT(ii,e)}const ni=i.J1`
	query TrackRelatedAlbums(
		$trackId: String!
		$relatedAlbumsFirst: Int
		$relatedAlbumsContributorsFirst: Int
	) {
		track(trackId: $trackId) {
			...TrackRelatedAlbums
		}
	}
	${lt}
`;function ai(t){const e={...s,...t};return i.IT(ni,e)}const oi=i.J1`
	mutation AddAlbumToFavorite($albumId: String!) {
		addAlbumToFavorite(albumId: $albumId) {
			album {
				id
				isFavorite
			}
		}
	}
`;function ci(t){const e={...s,...t};return i.n_(oi,e)}const ui=i.J1`
	mutation AddArtistFavorite($artistId: String!) {
		addArtistToFavorite(artistId: $artistId) {
			favoritedAt
			artist {
				id
				isFavorite
			}
		}
	}
`;function di(t){const e={...s,...t};return i.n_(ui,e)}const li=i.J1`
	mutation AddPlaylistToFavorite($playlistId: String!) {
		addPlaylistToFavorite(playlistId: $playlistId) {
			playlist {
				id
				isFavorite
			}
		}
	}
`;function Ii(t){const e={...s,...t};return i.n_(li,e)}const mi=i.J1`
	mutation AddPodcastToFavorite($podcastId: String!) {
		addPodcastToFavorite(podcastId: $podcastId) {
			podcast {
				id
				isPodcastFavorite: isFavorite
			}
		}
	}
`;function $i(t){const e={...s,...t};return i.n_(mi,e)}const fi=i.J1`
	mutation AddTrackToFavorite($trackId: String!) {
		addTrackToFavorite(trackId: $trackId) {
			track {
				id
				isFavorite
			}
		}
	}
`;function gi(t){const e={...s,...t};return i.n_(fi,e)}const yi=i.J1`
	mutation RemoveAlbumFromFavorite($albumId: String!) {
		removeAlbumFromFavorite(albumId: $albumId) {
			album {
				id
				isFavorite
			}
		}
	}
`;function pi(t){const e={...s,...t};return i.n_(yi,e)}const Si=i.J1`
	mutation RemoveArtistFromFavorite($artistId: String!) {
		removeArtistFromFavorite(artistId: $artistId) {
			artist {
				id
				isFavorite
			}
		}
	}
`;function Ti(t){const e={...s,...t};return i.n_(Si,e)}const Ai=i.J1`
	mutation RemovePlaylistFromFavorite($playlistId: String!) {
		removePlaylistFromFavorite(playlistId: $playlistId) {
			playlist {
				id
				isFavorite
			}
		}
	}
`;function Pi(t){const e={...s,...t};return i.n_(Ai,e)}const Ci=i.J1`
	mutation RemovePodcastFromFavorite($podcastId: String!) {
		removePodcastFromFavorite(podcastId: $podcastId) {
			podcast {
				id
				isPodcastFavorite: isFavorite
			}
		}
	}
`;function vi(t){const e={...s,...t};return i.n_(Ci,e)}const hi=i.J1`
	mutation RemoveTrackFromFavorite($trackId: String!) {
		removeTrackFromFavorite(trackId: $trackId) {
			track {
				id
				isFavorite
			}
		}
	}
`;function Ei(t){const e={...s,...t};return i.n_(hi,e)}const bi=i.J1`
	mutation BanArtistFromRecommendation($artistId: String!) {
		banArtistFromRecommendation(artistId: $artistId) {
			artist {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function Fi(t){const e={...s,...t};return i.n_(bi,e)}const Li=i.J1`
	mutation UnbanArtistFromRecommendation($artistId: String!) {
		unbanArtistFromRecommendation(artistId: $artistId) {
			artist {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function ki(t){const e={...s,...t};return i.n_(Li,e)}const Ri=i.J1`
	mutation BanTrackFromRecommendation($trackId: String!) {
		banTrackFromRecommendation(trackId: $trackId) {
			track {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function Ji(t){const e={...s,...t};return i.n_(Ri,e)}const Ni=i.J1`
	mutation UnbanTrackFromRecommendation($trackId: String!) {
		unbanTrackFromRecommendation(trackId: $trackId) {
			track {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function Oi(t){const e={...s,...t};return i.n_(Ni,e)}const qi=i.J1`
	mutation PinItem(
		$id: String!
		$type: QuickAccessTypeInput!
		$context: QuickAccessContextInput!
		$support: [QuickAccessTypeInput!] = [
			ALBUM
			ARTIST
			PLAYLIST
			PODCAST
			FLOW_CONFIG
			TRACK
			LIVESTREAM
		]
	) {
		quickAccessAppendItem(input: {id: $id, type: $type, context: $context}) {
			... on QuickAccessAppendItemMutationError {
				isLimitExceed
				isUnsupportedItemType
			}
			... on QuickAccessAppendItemMutationOutput {
				quickAccess {
					pinnedItems(support: $support) {
						item {
							...PinItem
						}
					}
				}
			}
		}
	}
	${St}
`;function _i(t){const e={...s,...t};return i.n_(qi,e)}const Di=i.J1`
	mutation UnpinItem(
		$id: String!
		$type: QuickAccessTypeInput!
		$context: QuickAccessContextInput!
		$support: [QuickAccessTypeInput!] = [
			ALBUM
			ARTIST
			PLAYLIST
			PODCAST
			FLOW_CONFIG
			TRACK
			LIVESTREAM
		]
	) {
		quickAccessUnpinItem(input: {id: $id, type: $type, context: $context}) {
			... on QuickAccessUnpinItemMutationError {
				isItemNotFound
			}
			... on QuickAccessUnpinItemMutationOutput {
				quickAccess {
					pinnedItems(support: $support) {
						item {
							...PinItem
						}
					}
				}
			}
		}
	}
	${St}
`;function xi(t){const e={...s,...t};return i.n_(Di,e)}const wi=i.J1`
	query PinnedDrawerAlbumItems($albumFirst: Int, $albumCursor: String) {
		me {
			charts {
				albums(first: $albumFirst, after: $albumCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							...PinDrawerAlbum
						}
					}
				}
			}
		}
	}
	${gt}
`;function Mi(t){const e={...s,...t};return i.IT(wi,e)}const Bi=i.J1`
	query PinnedDrawerArtistItems($artistFirst: Int, $artistCursor: String) {
		me {
			charts {
				artists(first: $artistFirst, after: $artistCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							... on Artist {
								id
								...ArtistBase
								__typename
							}
						}
					}
				}
			}
		}
	}
	${V}
`;function Ui(t){const e={...s,...t};return i.IT(Bi,e)}const Hi=i.J1`
	query PinnedDrawerFlowConfigItems(
		$flowConfigFirst: Int
		$flowConfigCursor: String
	) {
		me {
			charts {
				flowConfigs(first: $flowConfigFirst, after: $flowConfigCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							... on FlowConfig {
								id
								title
								visuals {
									dynamicPageIcon {
										id
										small: urls(uiAssetRequest: {height: 100, width: 100})
									}
								}
								__typename
							}
						}
					}
				}
			}
		}
	}
`;function Gi(t){const e={...s,...t};return i.IT(Hi,e)}const Wi=i.J1`
	query PinnedDrawerItems(
		$context: QuickAccessContextInput!
		$support: [QuickAccessTypeInput!] = [
			ALBUM
			ARTIST
			PLAYLIST
			PODCAST
			FLOW_CONFIG
			LIVESTREAM
			TRACK
		]
	) {
		me {
			id
			quickAccess(context: $context) {
				suggestedItems(support: $support) {
					item {
						... on Album {
							id
							...AlbumBase
						}
						... on Artist {
							id
							...ArtistBase
						}
						... on Playlist {
							id
							...PlaylistBase
						}
						... on Podcast {
							id
						}
						... on FlowConfig {
							id
						}
						... on Livestream {
							id
						}
						... on Track {
							id
						}
					}
				}
			}
			charts {
				albums {
					edges {
						node {
							... on Album {
								id
							}
						}
					}
				}
				artists {
					edges {
						node {
							... on Artist {
								id
							}
						}
					}
				}
				playlists {
					edges {
						node {
							... on Playlist {
								id
							}
						}
					}
				}
				podcasts {
					edges {
						node {
							... on Podcast {
								id
							}
						}
					}
				}
				flowConfigs {
					edges {
						node {
							... on FlowConfig {
								id
							}
						}
					}
				}
				livestreams {
					edges {
						node {
							... on Livestream {
								id
							}
						}
					}
				}
				tracks {
					edges {
						node {
							... on Track {
								id
							}
						}
					}
				}
			}
		}
	}
	${B}
	${V}
	${L}
`;function Ki(t){const e={...s,...t};return i.IT(Wi,e)}const Vi=i.J1`
	query PinnedDrawerLivestreamItems(
		$livestreamFirst: Int
		$livestreamCursor: String
	) {
		me {
			charts {
				livestreams(first: $livestreamFirst, after: $livestreamCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							... on Livestream {
								id
								name
								cover {
									...PictureSmall
								}
								__typename
							}
						}
					}
				}
			}
		}
	}
	${b}
`;function zi(t){const e={...s,...t};return i.IT(Vi,e)}const Yi=i.J1`
	query PinnedDrawerPlaylistItems(
		$playlistFirst: Int
		$playlistCursor: String
	) {
		me {
			charts {
				playlists(first: $playlistFirst, after: $playlistCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							...PinDrawerPlaylist
						}
					}
				}
			}
		}
	}
	${yt}
`;function Qi(t){const e={...s,...t};return i.IT(Yi,e)}const Xi=i.J1`
	query PinnedDrawerPodcastItems($podcastFirst: Int, $podcastCursor: String) {
		me {
			charts {
				podcasts(first: $podcastFirst, after: $podcastCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							... on Podcast {
								id
								displayTitle
								cover {
									...PictureSmall
								}
								__typename
							}
						}
					}
				}
			}
		}
	}
	${b}
`;function ji(t){const e={...s,...t};return i.IT(Xi,e)}const Zi=i.J1`
	query PinnedDrawerSuggestedItems(
		$context: QuickAccessContextInput!
		$support: [QuickAccessTypeInput!] = [
			ALBUM
			ARTIST
			PLAYLIST
			PODCAST
			FLOW_CONFIG
			LIVESTREAM
			TRACK
		]
	) {
		me {
			id
			quickAccess(context: $context) {
				suggestedItems(support: $support) {
					item {
						...PinItem
					}
				}
			}
		}
	}
	${St}
`;function ts(t){const e={...s,...t};return i.IT(Zi,e)}const es=i.J1`
	query PinnedDrawerTrackItems($trackFirst: Int, $trackCursor: String) {
		me {
			charts {
				tracks(first: $trackFirst, after: $trackCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							...PinDrawerTrack
						}
					}
				}
			}
		}
	}
	${pt}
`;function rs(t){const e={...s,...t};return i.IT(es,e)}const is=i.J1`
	query PinnedItems(
		$context: QuickAccessContextInput!
		$support: [QuickAccessTypeInput!] = [
			ALBUM
			ARTIST
			PLAYLIST
			PODCAST
			FLOW_CONFIG
			TRACK
			LIVESTREAM
		]
	) {
		me {
			id
			quickAccess(context: $context) {
				pinnedItems(support: $support) {
					item {
						...PinItem
					}
				}
			}
		}
	}
	${St}
`;function ss(t){const e={...s,...t};return i.IT(is,e)}const ns=i.J1`
	query Me {
		me {
			id
			onboarding {
				currentStep
				shouldBeOnboarded
			}
			user {
				id
			}
		}
	}
`;function as(t){const e={...s,...t};return i.IT(ns,e)}}}]);