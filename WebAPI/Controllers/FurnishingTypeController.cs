using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Dtos;
using WebAPI.Interfaces;

namespace WebAPI.Controllers
{
    public class FurnishingTypeController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public FurnishingTypeController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }

        //GET api/furnishingtype/list
        [HttpGet("list")]
        [AllowAnonymous]
        public async Task<IActionResult> GetFurnishingTypes()
        {
            var FurnishingTypes = await uow.FurnishingTypeRepository.GetFurnishingTypeAsync();
            var FurnishingTypeDto = mapper.Map<IEnumerable<KeyValuePairDto>>(FurnishingTypes);
            return Ok(FurnishingTypeDto);
        }
    }
}
