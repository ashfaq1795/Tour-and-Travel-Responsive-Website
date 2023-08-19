const initialState = {
  socialMedia: {
    linkedin: {
      link: "https://www.linkedin.com/in/ashfaq-ahmad-156504255/",
      cName: "fa-brands fa-linkedin"
    },
    github: {
      link: "https://github.com/ashfaq1795",
      cName: "fa-brands fa-github"
    },
    twitter: {
      link: "https://twitter.com/ashfaqdcse1795",
      cName: "fa-brands fa-twitter-square"
    },
    instagram: {
      link:
        "https://instagram.com/syedashfaq.ahmad?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
      cName: "fa-brands fa-instagram-square"
    },
    facebook: {
      link: "https://www.facebook.com/syedishfaq.ahmad.31",
      cName: "fa-brands fa-facebook-square"
    }
  },
  footerContents: [
    {
      title: "Projects",
      links: ["Changelog", "Status", "License", "All versions"]
    },
    {
      title: "Community",
      links: ["Github", "Issues", "Project", "Twitter"]
    },
    {
      title: "Help",
      links: ["Support", "Troubleshooting", "Contact Us"]
    },
    {
      title: "Others",
      links: ["Terms of Service", "Privacy Policy", "License"]
    }
  ]
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
