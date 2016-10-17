import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { MainService } from '../../services/main.service';
import { Member } from '../../services/classes/member';
import { Project } from '../../services/classes/project';

require('./project.css');

@Component({
  selector: 'project',
  // styles: [require('./project.css')],
  template: require('./project.html')
})

export class ProjectComponent implements OnInit {

  public projectLink: string;
  public pageName: string;
  public project: Project;
  public constructor(public route: ActivatedRoute,
                     public projectsService:ProjectsService,
                     private mainService: MainService) {
  }

  public getImage = (img:string):string => require('../../services/images/projects/' + img);
  public getAvatarImage = (img:string):string => require('../../services/images/members/' + img);
  public getFeedbackImage = (img:string):string => require('../../services/images/feedback/' + img);

  public ngOnInit(): void {
    this.pageName = 'Project page';
    this.route.params.subscribe((params: any) => {
      /* tslint:disable */
      this.projectLink = params['projectLink'];
      /* tslint:enable */
      let project = this.projectsService.getByLink(this.projectLink);

      // split items to 4 columns
      let formattedTechnologies: any = [[], [], [], []];
      project.technologies.forEach((technology: string, index: number) => {
        formattedTechnologies[index % 4].push(technology);
      });
      project.formattedTechnologies = formattedTechnologies;

      // filter related(to this projects) members
      const members = this.mainService.getTeam().filter((member: Member) => {
        return project.members.indexOf(member.memberId) >= 0;
      });

      // split items to 4 columns
      let formattedMembers: any = [[], [], [], []];
      members.forEach((member: Member, index: number) => {
        formattedMembers[index % 4].push({
          avatar: member.avatar,
          name: member.name,
          position: member.position
        });
      });
      project.formattedMembers = formattedMembers;

      project.reference = this.mainService.getFeedbackForProject(project.projectId);

      this.project = project;
    });
  }
}
