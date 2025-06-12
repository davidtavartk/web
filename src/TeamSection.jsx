// TeamSection.js
import React from "react";
import styled from "styled-components";
import { teamData } from "./constants";

const TeamContainer = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin-bottom: 60px;
  font-family: "Arial", sans-serif;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  justify-items: center;
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 350px;
  width: 80%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 4px solid #f0f0f0;
`;

const Name = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  font-family: "Arial", sans-serif;
`;

const JobTitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 25px;
  font-family: "Arial", sans-serif;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s ease, opacity 0.3s ease;
  font-size: 18px;
  color: white;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  &.facebook {
    background-color: #3b5998;
  }

  &.linkedin {
    background-color: #0077b5;
  }

  &.google {
    background-color: #dd4b39;
  }
`;

// Post Template Component
const Post = ({ member }) => {
  return (
    <TeamCard>
      <ProfileImage src={member.image} alt={member.name} />
      <Name>{member.name}</Name>
      <JobTitle>{member.title}</JobTitle>
      <SocialLinks>
        <SocialIcon
          href={member.social.facebook}
          className="facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          f
        </SocialIcon>
        <SocialIcon
          href={member.social.linkedin}
          className="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          in
        </SocialIcon>
        <SocialIcon
          href={member.social.google}
          className="google"
          target="_blank"
          rel="noopener noreferrer"
        >
          G+
        </SocialIcon>
      </SocialLinks>
    </TeamCard>
  );
};

// Main Team Section Component
const TeamSection = () => {
  return (
    <TeamContainer>
      <Title>Team</Title>
      <TeamGrid>
        {teamData.map((member) => (
          <Post key={member.id} member={member} />
        ))}
      </TeamGrid>
    </TeamContainer>
  );
};

export default TeamSection;
