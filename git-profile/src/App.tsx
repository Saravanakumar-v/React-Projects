import React, { useEffect, useState } from 'react';
import fork from './assets/Nesting.svg'
import gitlogo from './assets/github-mark-white.svg'
import branch from './assets/Chield_alt.svg'
import star from './assets/Star.svg'
import { getGithubUsernameData } from './commonAPI';
import { getRepoList } from './commonAPI';
import './App.scss';

function GithubProfileComponent({userData}: any) {
  return (
    <>
    {userData ?
      <div className='githubProfile-app_profile'>
        <div className='profile'>
          <div className='profile-dp'>
            <img src={userData.avatar_url} alt=''></img>
          </div>
          <div className='profile-info'>
            <div className='profile-info_followers'>
              <div>Followers</div>|
              <div>{userData.followers}</div>
            </div>

            <div className='profile-info_following'>
              <div>Following</div>|
              <div>{userData.following}</div>
            </div>

            <div className='profile-info_location'>
              <div>Location</div>|
              <div>{userData.location == null ?'Unknown' :userData.location}</div>
            </div>
          </div>
        </div>

        <div className='profile-desc'>
          <h1>{userData.name}</h1>
          <div>{userData.bio}</div>
        </div>
      </div>

      :
      null
    }
    </>
  )
}

function GithubProfileRepoComponent({repoList}: any) {

  return (
    <>
      <div className='githubProfile-app_repositoryList'> 
      {repoList 
        ?
        (repoList.map((repo: any) => {
          return (

          <div className='github-repository'>
          <div className='github-repo'>
            <div className='header'>{repo.name}</div>
            <div>{repo.description}</div>
          </div>

          <div className='github-repo-info'>
            <div className='container'>
            {repo.license == null ?null :<div><img src={branch} alt=''></img>{repo.license.spdx_id}</div>}
              <div>
                <img src={fork} alt=''/>
                {repo.forks_count}
              </div>
              <div>
                <img src={star} alt=''/>
                {repo.stargazers_count}
              </div>
            </div>
            <div className='img'>
              <a href={repo.svn_url} target='_blank'><img src={gitlogo}></img></a>
            </div>
            </div>
          </div>
          )
        }))
        :
        null
      }
      </div>
    </>
  )
}

function GithubProfileSearchComponenet({setSharedData, setSharedUsername}: any) {
  const [userData, setGithubUserData] = useState<any>();
  const [userName, setGithubUsername] = useState("");

  useEffect(() => {
    if(userName) {
      getGithubUsernameData(userName).then((response) => {
        setGithubUserData(response);
      });
    }
  }, [userName]);

  useEffect(() => {
    if(userData) {
      console.log(userData);
      setSharedData(userData);
      setSharedUsername(userName);
    }
  },[userData])


  function HandleInputUsername(event: any) {
    event.preventDefault();

    console.log("github username:", event.target.username.value);
    const username = event.target.username.value;

    setGithubUsername(username);
  }

  return (
    <>
      <div className='githubProfile-app_search'>
        <form className='content' onSubmit={(event) => HandleInputUsername(event)}>
          <span className="material-symbols-outlined">
            search
          </span>
          <input type='text' placeholder='username' id='username' className='profile-search'></input>
        </form>
      </div>
    </>
  );
}

function App() {
  const [sharedData, setSharedData] = useState();
  const [sharedUsername, setSharedUsername] = useState<any>();
  const [repoList, setRepoList] = useState();

  useEffect(() => {
    if(sharedUsername) {
      getRepoList(sharedUsername)
      .then((response) => {
        setRepoList(response);
      })
    }
  },[sharedUsername])

  return (
    <div className="githubProfile-app">
      <div className='githubProfile-app_cont1'>
        <GithubProfileSearchComponenet setSharedData={setSharedData} setSharedUsername={setSharedUsername} />
      </div>
      <div className='githubProfile-app_cont2'>
        <GithubProfileComponent userData={sharedData}/>
        <div className='repo-list'>
          <GithubProfileRepoComponent repoList={repoList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
 