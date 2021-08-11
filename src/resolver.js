import { getProjects, getContributions, getUsers, getUser, getOrganisations, getOrganisation } from "./api";

const resolvers = {
  Query: {
    projects: async () => {
      const projects = await getProjects();
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
      return projects.map((project) => {
        return {
          description: project.description,
          githubURL: project.github_url,
          mainLanguage: project.main_language,
        };
      });
    },

    contributions: async () => {
      const contributions = await getContributions();

      return contributions.map((contribution) => {
        return {
          title: contribution.title,
          issueURL: contribution.issue_url,
          repoName: contribution.repo_name,
          body: contribution.body,
        };
      });
    },

    users: async () => {
      const users = await getUsers();
      return users.map((user) => {
        return {
          id: user.id,
          nickname: user.nickname,
          gravatarID: user.gravatar_id,
          githubProfile: user.github_profile,
          contributionsCount: user.contributions_count,
          link: user.link,
        };
      });
    },

    user: async (parent, args, context, info) => {
      const user = await getUser(args.name);
      return {
        id: user.id,
        nickname: user.nickname,
        gravatarID: user.gravatar_id,
        githubProfile: user.github_profile,
        contributionsCount: user.contributions_count,
        link: user.link,
      };
    },

    organisations: async() => {
        const organisations = await getOrganisations();
        return organisations.map(organisation => {
            return {
                login: organisation.login,
                avatarURL: organisation.avatar_url,
                link: organisation.link,
            }
        })
    },

    organisation: async (parent, args, context, info) => {
        const organisation = await getOrganisation(args.name);
        return {
            login: organisation.login,
            avatarURL: organisation.avatar_url,
            link: organisation.link,
            usersObj: organisations.users
            
        }
    }


  },


  Organisation: {
    users:  async (parent, args, context, info) => {
        if (!parent.usersObj || parent.usersObj.length === 0){
            return []
        }
      return Promise.all(parent.users?.map(async u => {
        const user = await getUser(u.nickname)
        return user
      }))
    }
  }
};

export default resolvers;
