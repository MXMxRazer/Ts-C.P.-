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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const User_1 = require("../../entities/User");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(user) {
        this.user = user;
    }
    async insert(userDetails) {
        const user = this.user.create();
        const { firstName, lastName, email, password, year, month, day, gender } = userDetails;
        user.first_name = firstName;
        user.last_name = lastName;
        user.email = email;
        user.password = password;
        user.year = year;
        user.month = month;
        user.day = day;
        user.gender = gender;
        await this.user.save(user);
        return user;
    }
    findAll() {
        return this.user.find();
    }
    async findOne(id) {
        return await this.user.findOneBy({
            id: id,
        });
    }
    async updateById(id, userDetails) {
        return this.user
            .createQueryBuilder()
            .update()
            .set({
            first_name: userDetails.firstName,
        })
            .where('id = :id', { id })
            .execute();
    }
    async getUserByEmail(mail) {
        return await this.user.findOneBy({
            email: mail,
        });
    }
    getMyHomePageThroughEmail(mail) {
        console.log(`API connected in this URL!`);
        return {
            status: 200,
            response: 'recieved',
            identification: mail,
        };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(User_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=Service.js.map