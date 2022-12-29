"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const UsersDTO_1 = require("../DTO/UsersDTO");
const Service_1 = require("../services/Service");
let UserController = class UserController {
    constructor(userservice) {
        this.userservice = userservice;
    }
    getUsers() {
        return this.userservice.findAll();
    }
    setUsers(user) {
        return this.userservice.insert(user);
    }
    async getSpecificUser(id) {
        return await this.userservice.findOne(id);
    }
    async getSpecificUserThroughEmail(mail) {
        return await this.userservice.getUserByEmail(mail);
    }
    async updateUser(id, user) {
        return await this.userservice.updateById(id, user);
    }
    async getMyHomePage(mail) {
        return this.userservice.getMyHomePageThroughEmail(mail);
    }
};
__decorate([
    (0, common_1.Get)(`/display/`),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)('/inputs/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsersDTO_1.UsersDTo]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "setUsers", null);
__decorate([
    (0, common_1.Get)(`/display/:id`),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getSpecificUser", null);
__decorate([
    (0, common_1.Get)(`/display/email/:mail`),
    __param(0, (0, common_1.Param)('mail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getSpecificUserThroughEmail", null);
__decorate([
    (0, common_1.Put)(`redefine/:id`),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UsersDTO_1.UsersDTo]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)(`/:mail/Home`),
    __param(0, (0, common_1.Param)('mail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getMyHomePage", null);
UserController = __decorate([
    (0, common_1.Controller)('backend'),
    __metadata("design:paramtypes", [Service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=Controller.js.map